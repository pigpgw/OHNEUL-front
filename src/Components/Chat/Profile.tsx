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
      <ModalBtn
        onClick={() => {
          handleModal();
        }}
      >
        X
      </ModalBtn>
      <Div>
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
  background-color: #0075FF;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 20px;
  width: 17vh;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBtn = styled.button`
  font-size: 2.5vh;
  font-weight: 900;
  border: 0;
  background-color: white;
  cursor: pointer;
  position: absolute;
  left: 83%;
  bottom: 80%;
`;

const ModalTitle = styled.div`
  font-size: 2.5vh;
  font-weight: 800;
  text-align: center;
  margin: 1vh 0;
  font-family: sans-serif;
`;

const ModalsubTitle = styled.div`
  font-size: 2vh;
  font-weight: 600;
  text-align: center;
  margin: 3px;
  font-family: sans-serif;
`;

const InfoText = styled.p`
  font-size: 1.7vh;
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
