import { useEffect, useRef } from 'react';
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
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  return (
    <ChatMessagesContainer>
      <ChatMessagesWrapper>
        {messageList.map((v, i) => (
          <ChatMessageItemBox key={`${i}_li`} className={v.type}>
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
  height: calc(100vh - 120px);
  flex-direction: column;
  overflow: auto;
`;

const ChatMessagesWrapper = styled.div`
  list-style: none;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
`;

const ChatMessageItemBox = styled.li`
  border-radius: 10px;
  display: inline-block;
  padding: 2px;
  margin: 5px 1px;
  &.me {
    text-align: right;
  }
  &.other {
    text-align: left;
    margin-left: 2px;
  }
`;

const ChatMessageContent = styled.div`
  display: inline-block;
  font-size: 2vh;
  font-family: sans-serif;
  font-family: 100;


  &.me {
    color: white;
    background: #0075ff;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    padding: 5px 10px 7px 10px;
  }

  &.other {
    text-align: left;
    color: white;
    background: #0075ff;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    padding: 5px 10px 7px 10px;
  }
  &.startChat {
    font-size: 12px;
    color: white;
    box-sizing: border-box;
    background-color: lightgray;
    border-radius: 20px;

    padding: 5px 8px 5px 8px;
  }
`;
