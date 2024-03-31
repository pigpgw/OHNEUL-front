/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import ChatHeader from 'Components/Chat/ChatHeader';
import ChatInfo from 'Components/Chat/ChatInfo';
import ChatMessages from 'Components/Chat/ChatMessages';
import ChatInputForm from 'Components/Chat/ChatInputForm';

interface Message {
  msg: string;
  type: string;
  id: string;
}

function Chat({ socket }: any): JSX.Element {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [msg, setMsg] = useState<string>('');

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

  const msgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setMsg(e.target.value);
  };

  useEffect(() => {
    if (!socket) return;
    function sMessageCallback(messageData: any) {
      console.log('받은 데이터', messageData);
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

  return (
    <>
      <ChatHeader
        onCashIconClick={clickCashIcon}
        leaveRoomIconClick={clickExit}
        reportIconClick={clickReport}
      ></ChatHeader>
      <ChatInfo />
      <ChatMessages messageList={messageList} />
      {/* <form onSubmit={msgSubmitHandler}>
        <input value={msg} onChange={msgChangeHandler} type="text" />
        <button>메세지 보내기</button>
      </form> */}
      <ChatInputForm
        msgSubmitHandler={msgSubmitHandler}
        msg={msg}
        msgChangeHandler={msgChangeHandler}
      />
    </>
  );
}

export default Chat;
