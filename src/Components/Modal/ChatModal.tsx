/* eslint-disable import/prefer-default-export */
import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
  children: React.ReactNode;
};

function ModalWrapper({ children }: ModalProps) {
  return (
    <>{createPortal(<ModalLayout>{children}</ModalLayout>, document.body)}</>
  );
}

export const WaitModal = ({ onClose }: { onClose: (e:any) => void }) => {
  return (
    <ModalWrapper>
      <ModalTitle>대화 상대를 찾고 있어요</ModalTitle>
      <ModalBtnContainer>
        <ModalBtn onClick={onClose}>취소</ModalBtn>
      </ModalBtnContainer>
    </ModalWrapper>
  );
};

const ModalTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin: 10px;
`;

const ModalContent = styled.div`
  font-size: 10px;
`;

const ModalBtnContainer = styled.div`
  width: 60%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBtn = styled.button`
  font-size: 13px;
  font-weight: 900;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

const ModalLayout = styled.div`
  box-sizing: border-box;
  width: 73%;
  height: 23%;

  max-width: 450px;
  max-height: 250px;

  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 45%;
  left: 51%;
  transform: translate(-50%, -50%);
`;
