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
            {/* <ChatMessageUserInfo className="userId">{v.id}</ChatMessageUserInfo> */}
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
  &.startChat {
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
    color: black;
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    padding: 10px 10px 10px 10px;
    color: white;
    background: #0075ff;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  /* Rectangle 520 */

  &.other {
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    padding: 10px 10px 7px 10px;
    text-align: left;
    color: white;
    background: #0075ff;
    /* color: black;
    background: white; */
    /* border: 0.1px solid black; */
    /* box-shadow: 1px 1px 0.5px 0.5px lightgray; */
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
