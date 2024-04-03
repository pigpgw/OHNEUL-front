/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MouseEvent } from 'react';
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

interface WatiModalProps {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const WaitModal = ({ onClose }: WatiModalProps) => {
  return (
    <ModalWrapper>
      <ModalTitle>대화 상대를 찾고 있어요</ModalTitle>
      <ModalBtnContainer>
        <ModalBtn onClick={onClose}>취소</ModalBtn>
      </ModalBtnContainer>
    </ModalWrapper>
  );
};

type ConsentModalProps = {
  onAgree: () => void;
  onRefuse: () => void;
};

export const ConsentModal = ({ onAgree, onRefuse }: ConsentModalProps) => {
  return (
    <ModalWrapper>
      <ModalTitle>상대방과 대화를 연장하시겠습니까?</ModalTitle>
      <ModalBtnContainer>
        <ModalBtn onClick={onAgree}>연장하기</ModalBtn>
        <ModalBtn onClick={onRefuse}>거절하기</ModalBtn>
      </ModalBtnContainer>
    </ModalWrapper>
  );
};

interface InfoModal {
  infoContent: string;
  continueEvent?: () => void;
  finishEvent?: () => void;
  btnName1?: string;
  btnName2?: string;
}

export const InfoModal = ({
  infoContent,
  continueEvent,
  finishEvent,
  btnName1,
  btnName2,
}: InfoModal) => {
  return (
    <ModalWrapper>
      <ModalTitle>{infoContent}</ModalTitle>
      <ModalBtnContainer>
        {continueEvent && (
          <ModalBtn onClick={continueEvent}>{btnName1}</ModalBtn>
        )}
        {finishEvent && <ModalBtn onClick={finishEvent}>{btnName2}</ModalBtn>}
      </ModalBtnContainer>
    </ModalWrapper>
  );
};

interface ReportModalProps {
  infoContent: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  doReport: () => void;
  reportReasons?: string[];
  selectedReason: string;
}

export const ReportModal = ({
  infoContent,
  onClick,
  onClose,
  doReport,
  reportReasons = [],
  selectedReason,
}: ReportModalProps) => {
  return (
    <ReportModalLayout>
      <ModalTitle>{infoContent}</ModalTitle>
      <ReportModalBtnContainer>
        {reportReasons.map((reason, index) => (
          <ReportBtn
            key={index}
            value={reason}
            onClick={onClick}
            selected={selectedReason === reason}
          >
            {reason}
          </ReportBtn>
        ))}
        <ModalBtnContainer>
          <ModalBtn onClick={doReport}>신고하기</ModalBtn>
          <ModalBtn onClick={onClose}>취소</ModalBtn>
        </ModalBtnContainer>
      </ReportModalBtnContainer>
    </ReportModalLayout>
  );
};

const ModalTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  text-align: center;
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

const ReportModalLayout = styled.div`
  width: 73%;

  max-width: 450px;
  max-height: 320px;

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

const ReportModalBtnContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

interface ReportBtnProps {
  selected?: boolean;
}

const ReportBtn = styled.button<ReportBtnProps>`
  width: 200px;
  height: 30px;
  margin: 10px;
  background: ${(props) => (props.selected ? '#0075ff' : '#ffffff')};
  border: 1px solid #cccccc;
  border-radius: 20px;
  font-weight: 800;

  color: ${(props) => (props.selected ? 'white' : 'black')};
`;
