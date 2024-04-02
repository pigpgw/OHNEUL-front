/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import ChatHeader from 'Components/Chat/ChatHeader';
import ChatInfo from 'Components/Chat/ChatInfo';
import ChatMessages from 'Components/Chat/ChatMessages';
import ChatInputForm from 'Components/Chat/ChatInputForm';
import { ConsentModal, InfoModal } from 'Components/Modal/ChatModal';
import { useNavigate } from 'react-router-dom';

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
  const [forExitModal, setForExitModal] = useState<boolean>(false);
  const [exitModal, setExitModal] = useState<boolean>(false);

  useEffect(() => {
    if (!socket) return;
  }, [socket]);

  const clickCashIcon = () => console.log('캐쉬 아이콘을 클릭하였습니다');
  const clickExit = () => {
    console.log('나가기 버튼을 눌렀습니다.');
  };
  const clickReport = () => {
    console.log('신고하기');
  };

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
    console.log('체크용', consentModal, '나가기창', exitModal);
  });

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const msgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setMsg(e.target.value);
  };

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
  }, [socket]);

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
    goThemePage();
  };

  const navigate = useNavigate();

  const goThemePage = () => {
    navigate('/theme');
  };

  useEffect(() => {
    if (exitModal) setConsentModal(false);
  }, [exitModal]);

  useEffect(() => {
    function userExistCallback() {
      setExitModal(true);
      setTimeout(() => {
        goThemePage();
      }, 10000);
    }
    socket.on('finish', userExistCallback);
    return () => {
      socket.off('finish', userExistCallback);
    };
  }, [setRemainingTime, goThemePage, socket]);

  function onForExitModal() {
    setForExitModal(true);
  }
  function offForExitModal() {
    setForExitModal(false);
  }

  return (
    <>
      <ChatHeader
        onCashIconClick={clickCashIcon}
        reportIconClick={clickReport}
        onRefuse={onRefuse}
        onForExitModal={onForExitModal}
      ></ChatHeader>
      <ChatInfo />
      <div>{`${minutes}:${seconds}`}</div>
      {consentModal && !exitModal && (
        <ConsentModal onAgree={onAgree} onRefuse={onRefuse}></ConsentModal>
      )}
      {consentWaitModal && (
        <InfoModal
          infoContent={'상대방이 응답을 하는중입니다. 잠시만 기다려주세요'}
        ></InfoModal>
      )}
      {exitModal && (
        <InfoModal
          btnName2="나가기"
          finishEvent={goThemePage}
          infoContent='"상대방이 나갔습니다 10초뒤 주제 선택 페이지로 이동합니다..'
        ></InfoModal>
      )}
      {forExitModal && (
        <InfoModal
          infoContent="대화를 종료하시겠습니까?"
          continueEvent={offForExitModal}
          finishEvent={onRefuse}
          btnName1="계속하기"
          btnName2="나가기"
        />
      )}
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
