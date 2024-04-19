import styled from 'styled-components';

function ChatInfo() {
  return (
    <ChatInfoContainer>
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

const InfoContent = styled.p`
  margin: 2px;
  font-size: 12px;
  color: #a3a3a3;
`;
