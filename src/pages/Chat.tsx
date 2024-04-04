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
    setMessageList((prev) => [
      ...prev,
      {
        msg: '안녕',
        type: 'other',
        id: 'id',
      },
    ]);
  }, []);

  const msgSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMessageList((prev) => [
      ...prev,
      {
        msg,
        type: 'me',
        id: 'id',
      },
    ]);
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
