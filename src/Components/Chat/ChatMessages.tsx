import React, { ReactElement, useEffect } from 'react';
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
  return (
    <ChatMessagesContainer>
      <ChatMessagesWrapper>
        {messageList.map((v, i) => (
          <ChatMessageItemBox key={`${i}_li`} className={v.type}>
            <ChatMessageUserInfo className="userId">{v.id}</ChatMessageUserInfo>
            <ChatMessageContent className={v.type}>{v.msg}</ChatMessageContent>
          </ChatMessageItemBox>
        ))}
      </ChatMessagesWrapper>
    </ChatMessagesContainer>
  );
}

export default ChatMessages;

const ChatMessagesContainer = styled.div`
  width: 100%;
  height: 80%;
  min-height: 500px;
`;

const ChatMessagesWrapper = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
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
    background: #cecece;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
