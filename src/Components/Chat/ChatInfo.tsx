import React from 'react';
import styled from 'styled-components';

function ChatInfo() {
  return (
    <ChatInfoContainer>
      <InfoTitle>상대방과 연결되었습니다.</InfoTitle>
      <InfoContent>상대방 기분 넣을까</InfoContent>
      <InfoContent>상대방 취미 넣을까</InfoContent>
    </ChatInfoContainer>
  );
}

export default ChatInfo;

const ChatInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoTitle = styled.div`
  background-color: #cdcdcd;
  height: 20px;
  font-size: 12px;
  padding: 3px 10px 0 10px;
  margin: 7px;
  border-radius: 10px;
  color: white;
  
`;

const InfoContent = styled.p`
  margin: 2px;
  font-size: 12px;
  color: #a3a3a3;
`;
