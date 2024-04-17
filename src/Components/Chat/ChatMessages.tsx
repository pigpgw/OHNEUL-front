import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Message {
  msg: string;
  type: string;
  id: string;
}

interface MessageListProps {
  messageList: Message[];
}

function ChatMessages({ messageList }: MessageListProps): JSX.Element {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChatMessagesContainer>
      <ChatMessagesWrapper>
        {messageList.map((v, i) => (
          <ChatMessageItemBox key={`${i}_li`} className={v.type}>
            <ChatMessageUserInfo className="userId">{v.id}</ChatMessageUserInfo>
            <ChatMessageContent className={v.type}>{v.msg}</ChatMessageContent>
          </ChatMessageItemBox>
        ))}
        <div ref={messagesEndRef} />
      </ChatMessagesWrapper>
    </ChatMessagesContainer>
  );
}

export default ChatMessages;

const ChatMessagesContainer = styled.div`
  width: 100%;
  height: 80%;
`;

const ChatMessagesWrapper = styled.ul`
  list-style: none;
  height: 450px;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  /* iphone se */
  @media screen and (width: 375px) and (height: 667px) {
    height: 450px;
  }

  /* galaxy s8  */
  @media screen and (width: 360px) and (height: 740px) {
    height: 500px;
  }

  /* iphone 12por */
  @media screen and (width: 390px) and (height: 844px) {
    height: 620px;
  }

  /* galaxy s20 ultra  */
  @media screen and (width: 412px) and (height: 915px) {
    height: 700px;
  }
  /* iphone XR */
  @media screen and (width: 414px) and (height: 896px) {
    height: 660px;
  }

  /* iphone 14pro */
  @media screen and (width: 430px) and (height: 932px) {
    height: 720px;
  }

  /* ipad mini  */
  @media screen and (width: 768px) and (height: 1024px) {
    height: 800px;
  }

  /* ipad air  */
  @media screen and (width: 820px) and (height: 1180px) {
    height: 950px;
  }

  /* ipad air  */
  @media screen and (width: 1024px) and (height: 1366px) {
    height: 1120px;
  }
`;

const ChatMessageItemBox = styled.li`
  border-radius: 10px;
  display: inline-block;
  padding: 2px;
  &.me {
    text-align: right;
  }
  &.other {
    text-align: left;
    margin-left: 2px;
  }
`;

const ChatMessageUserInfo = styled.div`
  margin-top: 1px;
  font-size: 13px;
  font-weight: bold;
`;
const ChatMessageContent = styled.div`
  display: inline-block;
  &.me {
    color: white;
    padding: 7px 10px 7px 10px;
    background: #0075ff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &.other {
    padding: 5px 10px 7px 10px;
    text-align: left;
    background: #d4d4d4;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
