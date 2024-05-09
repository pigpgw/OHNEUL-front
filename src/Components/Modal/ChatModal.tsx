/* eslint-disable import/prefer-default-export */
import React, { ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import LoadingBox from 'Components/Common/LoadingBox/LoadingBox';
import HeartBeat from './Heart';
import font from '../styles/font'

type ModalProps = {
  children: React.ReactNode;
};

interface WatiModalProps {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

type ConsentModalProps = {
  onAgree: () => void;
  onRefuse: () => void;
};

interface InfoModal {
  infoContent: string;
  continueEvent?: () => void;
  finishEvent?: () => void;
  btnName1?: string;
  btnName2?: string;
}

interface ReportModalProps {
  infoContent: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  doReport: () => void;
  reportReasons?: string[];
  selectedReason: string;
}

type ReviewModalProps = {
  children: ReactNode;
};

function ModalWrapper({ children }: ModalProps) {
  return (
    <>{createPortal(<ModalLayout>{children}</ModalLayout>, document.body)}</>
  );
}

const WaitModal = ({ onClose }: WatiModalProps) => {
  return (
    <ModalWrapper>
      <ModalTitle>대화 상대를 찾고 있어요</ModalTitle>
      <LoadingBox />
      <ModalBtnContainer>
        <ModalBtn onClick={onClose}>취소</ModalBtn>
      </ModalBtnContainer>
    </ModalWrapper>
  );
};

const ConsentModal = React.memo(({ onAgree, onRefuse }: ConsentModalProps) => {
  return (
    <ModalWrapper>
      <ModalTitle>상대방과 대화를 연장하시겠습니까?</ModalTitle>
      <ModalBtnContainer>
        <ModalBtn onClick={onAgree}>연장하기</ModalBtn>
        <ModalBtn onClick={onRefuse}>거절하기</ModalBtn>
      </ModalBtnContainer>
      <ModalInfo>상호 동의시 코인이 차감되고 대화가 연장됩니다.</ModalInfo>
    </ModalWrapper>
  );
});

ConsentModal.displayName = 'ConsentModal';

const InfoModal = React.memo(
  ({
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
  },
);

InfoModal.displayName = 'InfoModal';

const ReportModal = React.memo(
  ({
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
            <ModalBtn onClick={doReport}>신고후 나가기</ModalBtn>
            <ModalBtn onClick={onClose}>취소</ModalBtn>
          </ModalBtnContainer>
        </ReportModalBtnContainer>
      </ReportModalLayout>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if the selectedReason prop changes
    return prevProps.selectedReason === nextProps.selectedReason;
  },
);
ReportModal.displayName = 'ReportModal';

const ReviewModal = ({ children }: ReviewModalProps) => {
  return (
    <ModalWrapper>
      <ModalTitle>오늘 대화는 어떠셨나요?</ModalTitle>
      {children}
    </ModalWrapper>
  );
};

const AgreeModal = () => {
  return (
    <ModalWrapper>
      <ModalTitle>연장 성공!</ModalTitle>
      <HeartBeat />
      <ModalInfo>5초후 대화가 자동으로 시작됩니다.</ModalInfo>
    </ModalWrapper>
  );
};

export {
  WaitModal,
  ConsentModal,
  InfoModal,
  ReportModal,
  ReviewModal,
  AgreeModal,
};

const ModalTitle = styled.div`
  font-size: ${font.content};
  font-weight: 800;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
`;

const ModalBtnContainer = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-family: sans-serif;
`;

const ModalBtn = styled.button`
  font-size: ${font.btn};
  font-weight: 900;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

const ModalLayout = styled.div`
  box-sizing: border-box;
  width: 73%;
  padding: 1vh;
  z-index: 2;
  max-width: 450px;
  min-height: 100px;
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
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ReportModalLayout = styled.div`
  width: 80%;

  max-width: 450px;
  z-index: 1;
  background: white;
  border: 1px solid #cccccc;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ReportModalBtnContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

interface ReportBtnProps {
  selected?: boolean;
}

const ReportBtn = styled.button<ReportBtnProps>`
  width: 100%;
  font-size: ${font.btn};
  height: 30px;
  margin: 10px;
  background: ${(props) => (props.selected ? '#0075ff' : '#ffffff')};
  border: 1px solid #cccccc;
  border-radius: 20px;
  font-weight: 800;

  color: ${(props) => (props.selected ? 'white' : 'black')};
`;

const ModalInfo = styled.p`
  margin: 3px;
  font-size: 11px;
`;
