import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChatSubmitBtn from 'Components/Common/Button';

interface ChatInputProps {
  msgSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  msg: string;
  msgChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ChatInputForm({
  msgSubmitHandler,
  msg,
  msgChangeHandler,
}: ChatInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setKeyboardHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [msg, msgSubmitHandler]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [keyboardHeight]);

  return (
    <ChatInputContainer>
      <form onSubmit={msgSubmitHandler}>
        <ChatInput ref={inputRef} value={msg} onChange={msgChangeHandler} />
        {msg && (
          <ChatSubmitBtn
            width="8vh"
            height="5vh"
            padding="1px"
            fontSize="2vh"
            margin="0 0 0 5px"
            minHeigth='25px'
            minWidht='30px'
          >
            전송
          </ChatSubmitBtn>
        )}
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  width: 100%;
  margin: 5px;
`;

const ChatInput = styled.input`
  width: 70%;
  background: #dbdbdb;
  border-radius: 5px;
  border: 0;
  margin: 0;
  max-width: 300px;
  font-size: 2vh;
  min-height: 30px;
`;

export default React.memo(ChatInputForm);
