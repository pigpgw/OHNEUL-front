/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import ChatHeader from 'Components/Chat/ChatHeader';
import ChatInfo from 'Components/Chat/ChatInfo';
import ChatMessages from 'Components/Chat/ChatMessages';
import ChatInputForm from 'Components/Chat/ChatInputForm';
import { extractUserId } from 'utils/extractCookie';
import {
  ConsentModal,
  InfoModal,
  ReportModal,
  ReviewModal,
} from 'Components/Modal/ChatModal';
import { useCoinQuery } from 'hooks/useCoinQuery';
import { useNavigate } from 'react-router-dom';
import Rating from 'Components/Chat/Rating';

interface Message {
  msg: string;
  type: string;
  id: string;
}

function Chat({ socket }: any): JSX.Element {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [msg, setMsg] = useState<string>('');
  const [consentModal, setConsentModal] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(6);
  const [consent, setConsent] = useState<boolean>(false);
  const [consentWaitModal, setConsentWaitModal] = useState<boolean>(false);
  const [forExitModal, setForExitModal] = useState<boolean>(false);
  const [exitModal, setExitModal] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(0);

  const [reportModal, setReportModal] = useState<boolean>(false);
  const [reportReason, setReportReson] = useState<string>('');
  const userId = extractUserId();
  const { userCoinState } = useCoinQuery(userId);

  useEffect(() => {
    if (!socket) return;
  }, [socket]);

  const clickCashIcon = () => console.log('캐쉬 아이콘을 클릭하였습니다');

  function onForExitModal() {
    setForExitModal(true);
  }
  function offForExitModal() {
    setForExitModal(false);
  }

  function countTime() {
    if (intervalId) clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(newIntervalId);
          setConsentModal(true);
          setConsent(false);
          return 0;
        }
        return prevTime - 1;
      });
      // 총 대화시간 체크
      setTotalTime((prev) => {
        return prev + 1;
      });
    }, 1000);

    setIntervalId(newIntervalId);
  }
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const msgChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMsg(e.target.value);
  };

  const msgSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (msg.length === 0) return
    const sendData = {
      data: msg,
      id: socket.id,
    };
    setMessageList((prev) => [
      ...prev,
      {
        msg,
        type: 'me',
        id: socket.id,
      },
    ]);
    socket.emit('sendMessage', sendData);
    setMsg('');
  };

  useEffect(() => {
    if (!socket) return;
    function sMessageCallback(messageData: any) {
      const { data, id } = messageData;
      if (id !== socket.id) {
        setMessageList((prev) => [
          ...prev,
          {
            msg: data,
            type: 'other',
            id,
          },
        ]);
      }
    }
    socket.on('receiveMessage', sMessageCallback);
    // eslint-disable-next-line consistent-return
    return () => {
      socket.off('receiveMessage', sMessageCallback);
    };
  }, [socket]);

  useEffect(() => {
    function consentWaitCallback() {
      setConsentWaitModal(true);
    }

    function consentSuccessCallback() {
      setConsentModal(false);
      setConsent(true);
      setConsentWaitModal(false);
    }

    function extendTimeCallback(extendedTime: number) {
      clearInterval(intervalId);
      setRemainingTime(extendedTime);
    }

    socket.on('wait', consentWaitCallback);
    socket.on('start', consentSuccessCallback);
    socket.on('extendTime', extendTimeCallback);
    return () => {
      socket.off('wait', consentWaitCallback);
      socket.off('start', consentSuccessCallback);
      socket.off('extendTime', extendTimeCallback);
    };
  }, [consent]);

  useEffect(() => {
    countTime();
  }, [consent]);

  const onAgree = () => {
    if (userCoinState < 5) {
      alert('ㅠㅠㅠ 코인이 부족합니다.');
    } else {
      const data = {
        user_id: userId,
        consent: 'agree',
      };
      socket.emit('consent', data);
      setConsentWaitModal(true);
      setConsentModal(false);
    }
  };

  const onRefuse = () => {
    const data = {
      user_id: userId,
      consent: 'no',
    };
    socket.emit('consent', data);
    socket.emit('userExit');
    goThemePage();
  };

  const navigate = useNavigate();

  const goThemePage = () => {
    console.log('쿠키 초기화 이전 cookie 확인', document.cookie);
    document.cookie = 'other=';
    console.log('방 나나고 쿠키 삭제', document.cookie);
    navigate('/theme');
  };

  useEffect(() => {
    if (exitModal) setConsentModal(false);
  }, [exitModal]);

  useEffect(() => {
    function userExistCallback() {
      clearInterval(intervalId);
      if (totalTime < 3) {
        setExitModal(true);
        setTimeout(() => {
          goThemePage();
        }, 10000);
      } else {
        setReviewModal(true);
      }
    }
    socket.on('finish', userExistCallback);
    return () => {
      socket.off('finish', userExistCallback);
    };
  }, [goThemePage, socket]);

  const onReportModal = () => {
    setReportModal(true);
  };

  const offReportModal = () => {
    setReportModal(false);
  };

  const selectReportReason = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = e.target as HTMLButtonElement;
    setReportReson(value);
    // console.log('누른 신고사유', reportReason);
  };

  const reportUser = () => {
    const reportedUserId = extractUserId();
    // console.log('상대방 uuid', reportedUserId);
    // console.log('상대방 신고 사유', reportReason);
    const reportInfo = {
      reportedUserId,
      reportReason,
    };
    socket.emit('reportUser', reportInfo);
    setReportReson('');
    alert('신고가 완료되었습니다.');
    setReportModal(false);
  };

  return (
    <>
      <ChatHeader
        onCashIconClick={clickCashIcon}
        reportIconClick={onReportModal}
        onRefuse={onRefuse}
        onForExitModal={onForExitModal}
      ></ChatHeader>
      <ChatInfo />
      <div>{`${minutes}:${seconds}`}</div>
      {consentModal && !exitModal && (
        <ConsentModal onAgree={onAgree} onRefuse={onRefuse}></ConsentModal>
      )}
      {consentWaitModal && (
        <InfoModal
          infoContent={'상대방이 응답을 하는중입니다. 잠시만 기다려주세요'}
        ></InfoModal>
      )}
      {exitModal && (
        <InfoModal
          btnName2="나가기"
          finishEvent={goThemePage}
          infoContent="상대방이 나갔습니다 10초뒤 주제 선택 페이지로 이동합니다.."
        ></InfoModal>
      )}
      {reportModal && (
        <ReportModal
          infoContent="신고"
          reportReasons={[
            '성적 발언',
            '혐오발언',
            '패드립',
            '부적절한 발언',
            '도배',
          ]}
          onClick={selectReportReason}
          onClose={offReportModal}
          selectedReason={reportReason}
          doReport={reportUser}
        />
      )}
      {reviewModal && (
        <ReviewModal>
          <Rating socket={socket} />
        </ReviewModal>
      )}
      {forExitModal && (
        <InfoModal
          infoContent="대화를 종료하시겠습니까?"
          continueEvent={offForExitModal}
          finishEvent={onRefuse}
          btnName1="계속하기"
          btnName2="나가기"
        />
      )}
      <ChatMessages messageList={messageList} />
      {remainingTime !== 0 && (
        <ChatInputForm
          msgSubmitHandler={msgSubmitHandler}
          msg={msg}
          msgChangeHandler={msgChangeHandler}
        />
      )}
    </>
  );
}

export default Chat;
