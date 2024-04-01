/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import ChatHeader from 'Components/Chat/ChatHeader';
import ChatInfo from 'Components/Chat/ChatInfo';
import ChatMessages from 'Components/Chat/ChatMessages';
import ChatInputForm from 'Components/Chat/ChatInputForm';
import { ConsentModal, ConsentWaitModal } from 'Components/Modal/ChatModal';

interface Message {
  msg: string;
  type: string;
  id: string;
}

function Chat({ socket }: any): JSX.Element {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [msg, setMsg] = useState<string>('');
  const [consentModal, setConsentModal] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(6);
  const [consent, setConsent] = useState<boolean>(false);
  const [consentWaitModal, setConsentWaitModal] = useState<boolean>(false);

  const clickCashIcon = () => console.log('캐쉬 아이콘을 클릭하였습니다');

  const clickExit = () => {
    console.log('나가기 버튼을 눌렀습니다.');
  };

  const clickReport = () => {
    console.log('신고하기');
  };

  useEffect(() => {
    if (!socket) return;
  }, [socket]);

  function countTime() {
    if (intervalId) clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(newIntervalId);
          setConsentModal(true);
          setConsent(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const msgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setMsg(e.target.value);
  };

  useEffect(() => {
    if (!socket) return;
    function sMessageCallback(messageData: any) {
      const { data, id } = messageData;
      if (id !== socket.id) {
        setMessageList((prev) => [
          ...prev,
          {
            msg: data,
            type: 'other',
            id,
          },
        ]);
      }
    }
    socket.on('receiveMessage', sMessageCallback);
    // eslint-disable-next-line consistent-return
    return () => {
      socket.off('receiveMessage', sMessageCallback);
    };
  }, []);

  const msgSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const sendData = {
      data: msg,
      id: socket.id,
    };
    setMessageList((prev) => [
      ...prev,
      {
        msg,
        type: 'me',
        id: socket.id,
      },
    ]);
    socket.emit('sendMessage', sendData);
    setMsg('');
  };

  useEffect(() => {
    function consentWaitCallback() {
      setConsentWaitModal(true);
    }

    function consentSuccessCallback() {
      setConsentModal(false);
      setConsent(true);
      setConsentWaitModal(false);
    }

    function extendTimeCallback(extendedTime: number) {
      clearInterval(intervalId);
      setRemainingTime(extendedTime);
    }

    socket.on('wait', consentWaitCallback);
    socket.on('start', consentSuccessCallback);
    socket.on('extendTime', extendTimeCallback);

    return () => {
      socket.off('wait', consentWaitCallback);
      socket.off('start', consentSuccessCallback);
      socket.off('extendTime', extendTimeCallback);
    };
  }, [consent]);

  useEffect(() => {
    countTime();
  }, [consent]);

  const onAgree = () => {
    socket.emit('consent', 'agree');
    setConsentWaitModal(true);
    setConsentModal(false);
  };

  const onRefuse = () => {
    socket.emit('consent', 'no');
    socket.emit('userExit');
  };

  return (
    <>
      <ChatHeader
        onCashIconClick={clickCashIcon}
        leaveRoomIconClick={clickExit}
        reportIconClick={clickReport}
      ></ChatHeader>
      <ChatInfo />
      <div>{`${minutes}:${seconds}`}</div>
      {consentModal && (
        <ConsentModal onAgree={onAgree} onRefuse={onRefuse}></ConsentModal>
      )}
      {consentWaitModal && <ConsentWaitModal></ConsentWaitModal>}

      <ChatMessages messageList={messageList} />
      {remainingTime !== 0 && (
        <ChatInputForm
          msgSubmitHandler={msgSubmitHandler}
          msg={msg}
          msgChangeHandler={msgChangeHandler}
        />
      )}
    </>
  );
}

export default Chat;
