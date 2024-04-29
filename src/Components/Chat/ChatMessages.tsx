import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoPerson } from '@react-icons/all-files/io5/IoPerson';

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
            {v.type === 'me' || v.type === 'other' ? (
              <ProfileWrapper>
                <Profile
                  className={v.type}
                  onClick={
                    v.type === 'me' ? handleMyProFile : handleOhterProFile
                  }
                />
              </ProfileWrapper>
            ) : null}
            <ChatMessageWrapper className={v.type}>{v.msg}</ChatMessageWrapper>
          </ChatMessageItemBox>
        ))}
        <div ref={messagesEndRef} />
      </ChatMessagesWrapper>
    </ChatMessagesContainer>
  );
}

export default React.memo(ChatMessages);

const Profile = styled(IoPerson)`
  border-radius: 100%;
  position: relative;
  color: #747474;
  &.me {
    margin: 1px 0;
    width: 3vh;
    height: 3vh;
    background-color: #e1e1e1;
    /* box-shadow: 2px 2px 1px 1px #e3e3e3; */
    margin-left: auto;
  }

  &.other {
    margin: 1px 0;
    width: 3vh;
    height: 3vh;
    background-color: #e1e1e1;
  }
`;

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
    /* box-shadow: 2px 2px 1px 1px #e3e3e3; */
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
  font-size: 2vh;
  font-family: sans-serif;
  font-family: 100;
  position: relative;

  &.me {
    color: white;
    background: #ff7e95;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 2px 2px 0 0 lightgray;
    padding: 7px 10px 7px 10px;
    right: 1%;
    margin-right: 1vh;
  }

  &.other {
    text-align: left;
    color: white;
    background: #ff7e95;
    box-shadow: 2px 2px 0 0 lightgray;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-left: 1vh;
    padding: 7px 10px 7px 10px;
    left: 1%;
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
