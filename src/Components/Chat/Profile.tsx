import Star from 'Components/Common/Star';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';

import React from 'react';

type ModalProps = {
  children: React.ReactNode;
};

type ProfileProps = {
  user: string;
  reviewScore: number;
  favorite: string;
  mood: string;
  handleModal: () => void;
};

function ModalWrapper({ children }: ModalProps) {
  return (
    <>
      {createPortal(
        <ProfileContainer>{children}</ProfileContainer>,
        document.body,
      )}
    </>
  );
}

const ProfileModal = ({
  user,
  reviewScore,
  favorite,
  mood,
  handleModal,
}: ProfileProps) => {
  return (
    <ModalWrapper>
      <Div>
        <ModalBtn
          onClick={() => {
            handleModal();
          }}
        >
          X
        </ModalBtn>
        <ModalTitle>{user}</ModalTitle>
      </Div>
      <Wrapper>
        <ModalsubTitle>평점</ModalsubTitle>
        <Star score={reviewScore} paddingBottom="1vh" size={'3vh'} />
      </Wrapper>
      <Wrapper>
        <InfoText>관심사 : {favorite}</InfoText>
        <InfoText>기분 : {mood}</InfoText>
      </Wrapper>
    </ModalWrapper>
  );
};

export default React.memo(ProfileModal);

const Div = styled.div`
  width: 100%;
  background-color: #0075ff;
  border-radius: 10px 10px 0 0;
  padding: 1px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 20px;
  width: 30vh;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBtn = styled.button`
  font-size: 2.5vh;
  font-weight: 900;
  border: 0;
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  margin: 0;
  color: white;
  left: 88%;
  bottom: 82%;
`;

const ModalTitle = styled.div`
  font-size: 2.5vh;
  font-weight: 800;
  text-align: center;
  margin: 2% 0;
  font-family: sans-serif;
  color: white;
`;

const ModalsubTitle = styled.div`
  font-size: 2vh;
  font-weight: 600;
  text-align: center;
  margin: 2vh 0 0 0;
  font-family: sans-serif;
`;

const InfoText = styled.p`
  font-size: 2vh;
  font-family: sans-serif;
  margin: 2px 0;
`;

const Wrapper = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 400;
`;
