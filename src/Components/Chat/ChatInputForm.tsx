import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
  }, []);

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
    <ChatInputContainer style={{ marginBottom: keyboardHeight }}>
      <form onSubmit={msgSubmitHandler}>
        <ChatInput ref={inputRef} value={msg} onChange={msgChangeHandler} />
        {msg && <ChatSubmitBtn>전송</ChatSubmitBtn>}
      </form>
    </ChatInputContainer>
  );
}

const ChatInputContainer = styled.div`
  width: 100%;
`;

const ChatInput = styled.input`
  width: 80%;
  height: 35px;
  background: #bfddff;
  border-radius: 20px;
  border: 0;
  max-width: 400px;
`;

const ChatSubmitBtn = styled.button`
  font-size: 14px;
  color: white;
  font-weight: 800;
  background: #6cb0ff;
  border-radius: 5px;
  border: 0;
  padding: 10px;
  margin-left: 10px;
`;

export default ChatInputForm;
