import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoPerson } from '@react-icons/all-files/io5/IoPerson';
import font from '../styles/font';

interface Message {
  msg: string;
  type: string;
  id: string;
}

interface MessageListProps {
  messageList: Message[];
  handleMyProFile: () => void;
  handleOhterProFile: () => void;
}

function ChatMessages({
  messageList,
  handleMyProFile,
  handleOhterProFile,
}: MessageListProps): JSX.Element {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ChatMessagesWrapper>
      {messageList.map((v, i) => (
        <ChatMessageItemBox key={`${i}_li`} className={v.type}>
          {v.type === 'me' || v.type === 'other' ? (
            <ProfileWrapper>
              <Profile
                className={v.type}
                onClick={v.type === 'me' ? handleMyProFile : handleOhterProFile}
              />
            </ProfileWrapper>
          ) : null}
          <ChatMessageWrapper className={v.type}>{v.msg}</ChatMessageWrapper>
        </ChatMessageItemBox>
      ))}
      <div ref={messagesEndRef} />
    </ChatMessagesWrapper>
  );
}

export default ChatMessages;

const Profile = styled(IoPerson)`
  &.me,
  &.other {
    width: 3vh;
    height: 3vh;
    color: #747474;
    margin: 1px 0;
    border: 2px solid #d7d7d7;
    background-color: #e1e1e1;
    margin-left: auto;
    border-radius: 100%;
    position: relative;
  }
`;

const ChatMessagesWrapper = styled.div`
  width: 100%;
  list-style: none;
  margin: 0;
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2% 0;
  overflow-y: scroll;
  justify-content: center;
`;

const ChatMessageItemBox = styled.div`
  border-radius: 10px;
  display: inline-block;
  padding: 2px;
  &.me {
    text-align: right;
    margin: 4px 1px;
  }
  &.other {
    text-align: left;
    margin-left: 2px;
    margin: 4px 1px;
  }
`;

const ProfileWrapper = styled.div`
  &.me {
    text-align: right;
    margin: 4px 0;
    width: 3vh;
    height: 3vh;
    background-color: #e1e1e1;
    margin-left: auto;
  }

  &.other {
    text-align: left;
    margin: 4px 0;
    width: 2vh;
    height: 2vh;
    background-color: #e1e1e1;
  }
`;

const ChatMessageWrapper = styled.div`
  display: inline-block;
  font-size: ${font.content};
  font-family: sans-serif;
  font-family: 100;
  position: relative;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;

  &.me {
    color: white;
    background: #0075ff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 1px 1px 0 0 lightgray;
    padding: 7px 10px 7px 10px;
    right: 1%;
    margin-right: 1vh;
    max-width: 87%;
  }

  &.other {
    text-align: left;
    color: white;
    background: #0075ff;
    box-shadow: 1px 1px 0 0 lightgray;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-left: 1vh;
    padding: 7px 10px 7px 10px;
    left: 1%;
    max-width: 87%;
  }

  &.start {
    font-size: 1.5vh;
    color: lightgray;
    margin: 0;
    border: 0;
    padding: 0;
  }

  &.startChat {
    font-size: 12px;
    color: white;
    box-sizing: border-box;
    background-color: lightgray;
    border-radius: 20px;
    margin: 0;
    padding: 5px 8px 5px 8px;
  }
`;
