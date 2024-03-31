/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import ChatHeader from 'Components/Chat/ChatHeader';
import ChatInfo from 'Components/Chat/ChatInfo';

interface Message {
  msg: string;
  type: string;
  id: string;
}

function Chat({ socket }: any): JSX.Element {
  const [messageList, setMessageList] = useState<Message[]>();
  const [msg, setMsg] = useState<string>('');

  const clickCashIcon = () => console.log('캐쉬 아이콘을 클릭하였습니다');

  const clickExit = () => {
    console.log('나가기 버튼을 눌렀습니다.');
  };

  const clickReport = () => {
    console.log('신고하기');
  };

  useEffect(() => {
    return () => {
      if (socket) return;
    };
  }, []);

  return (
    <>
      <ChatHeader
        onCashIconClick={clickCashIcon}
        leaveRoomIconClick={clickExit}
        reportIconClick={clickReport}
      ></ChatHeader>
      <ChatInfo />
      
    </>
  );
}

export default Chat;
