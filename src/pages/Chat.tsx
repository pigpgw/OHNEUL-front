/* eslint-disable no-useless-return */
import React, { useCallback, useEffect, useState } from 'react';
import ChatHeader from 'Components/Chat/ChatHeader';
import ChatMessages from 'Components/Chat/ChatMessages';
import ChatInputForm from 'Components/Chat/ChatInputForm';
import ProfileModal from 'Components/Chat/Profile';
import { extractUserId, extractOtherUserId } from 'utils/extractCookie';
import { fetchUserMood } from 'api/fetchMood';
import {
  ConsentModal,
  InfoModal,
  ReportModal,
  ReviewModal,
  AgreeModal,
} from 'Components/Modal/ChatModal';
import AlertModal from 'Components/Modal/AlertModal';
import { useCoinQuery } from 'hooks/useCoinQuery';
import { useNavigate } from 'react-router-dom';
import Rating from 'Components/Chat/Rating';
import { fecthGetUserHobby } from 'api/fetchGetOneUserHobby';
import { fetchGetUserScore } from 'api/fetchGetUserScore';

interface Message {
  msg: string;
  type: string;
  id: string;
}

function Chat({ socket }: any): JSX.Element {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );
  const [messageList, setMessageList] = useState<Message[]>([
    {
      type: 'startChat',
      msg: `상대방과 연결되었습니다.`,
      id: '',
    },
  ]);
  const [msg, setMsg] = useState<string>('');
  const [consentModal, setConsentModal] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(300);
  const [consent, setConsent] = useState<boolean>(false);
  const [consentWaitModal, setConsentWaitModal] = useState<boolean>(false);
  const [forExitModal, setForExitModal] = useState<boolean>(false);
  const [exitModal, setExitModal] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [reportModal, setReportModal] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useState<boolean>(false);

  const [reportReason, setReportReson] = useState<string>('');
  const userId = extractUserId();
  const { userCoinState } = useCoinQuery(userId);
  const [aniTime, setAniTime] = useState(remainingTime);

  const [otherMood, setOtherMood] = useState<string>('');
  const [otherHobby, setOtherHobby] = useState<string>('');
  const [myMood, setMyMood] = useState('');
  const [myHobby, setMyHobby] = useState('');
  const [otherScore, setOtherScore] = useState('');
  const [myScore, setMyScore] = useState('');

  const [agreeModal, setAgreeModal] = useState(false);
  const [myProfileModal, setMyProfileModal] = useState(false);
  const [otherProfileModal, setOtherProfileModal] = useState(false);

  useEffect(() => {
    if (!socket) return;
    const setOtherInfo = async () => {
      try {
        const otherUserId = extractOtherUserId();
        const mood = await fetchUserMood(otherUserId);
        const hobby = await fecthGetUserHobby(otherUserId);
        const getOtherScore = await fetchGetUserScore(otherUserId);
        setOtherScore(getOtherScore);
        setOtherMood(mood);
        setOtherHobby(hobby.join(', '));
        setMessageList((prev) => [
          ...prev,
          {
            type: 'start',
            msg: `상대방은 ${hobby.join(', ')}에 관심있어요`,
            id: '',
          },
          {
            type: 'start',
            msg: `상대방은 지금 ${mood}`,
            id: '',
          },
        ]);
      } catch (error) {
        console.error('상대방 기분, 취미 가져오기 실패', error);
      }
    };

    const setMyInfo = async () => {
      try {
        const mood = await fetchUserMood(userId);
        const hobby = await fecthGetUserHobby(userId);
        const getMyScore = await fetchGetUserScore(userId);
        setMyMood(mood);
        setMyHobby(hobby.join(', '));
        setMyScore(getMyScore);
      } catch (error) {
        console.error('내 기분, 취미 가져오기 실패', error);
      }
    };

    setOtherInfo();
    setMyInfo();
  }, []);

  const onForExitModal = useCallback(() => {
    setForExitModal(true);
  }, []);

  const offForExitModal = useCallback(() => {
    setForExitModal(false);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const msgChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setMsg(e.target.value);
    },
    [msg],
  );

  const msgSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (msg.length === 0) return;
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
    },
    [msg],
  );

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
      setConsentModal(false);
    }

    function consentSuccessCallback() {
      setAgreeModal(true);
      setConsentModal(false);
      setConsentWaitModal(false);
    }

    function extendTimeCallback(extendedTime: number) {
      setConsent(true);
      setAgreeModal(false);
      clearInterval(intervalId);
      setRemainingTime(extendedTime);
      setAniTime(extendedTime);
      setConsentModal(false);
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
    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(newIntervalId);
          setConsentModal(true);
          setConsent(false);
          setAniTime(0);

          return 0;
        }
        return prevTime - 1;
      });
      setTotalTime((prev) => {
        return prev + 1;
      });
    }, 1000);
    setIntervalId(newIntervalId);
  }, [consent]);

  const offAlertModal = () => {
    setAlertModal(true);
  };

  const onAgree = useCallback(() => {
    if (userCoinState < 5) {
      setAlertModal(true);
    } else {
      const data = {
        user_id: userId,
        consent: 'agree',
      };
      socket.emit('consent', data);
      setConsentWaitModal(true);
      setConsentModal(false);
    }
  }, []);

  const onRefuse = useCallback(() => {
    const data = {
      user_id: userId,
      consent: 'no',
    };
    socket.emit('consent', data);
    goThemePage();
  }, []);

  const navigate = useNavigate();

  const goThemePage = () => {
    document.cookie = 'other=';
    navigate('/theme');
    socket.emit('userExit');
  };

  useEffect(() => {
    if (exitModal) setConsentModal(false);
  }, [exitModal]);

  useEffect(() => {
    function userExistCallback() {
      clearInterval(intervalId);
      setAniTime(0);
      if (totalTime < 5) {
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

  const onReportModal = useCallback(() => {
    setReportModal(true);
  }, []);

  const offReportModal = useCallback(() => {
    setReportModal(false);
  }, []);

  const selectReportReason = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      const { value } = e.target as HTMLButtonElement;
      setReportReson(value);
    },
    [],
  );

  const [reportAlert, setReportAlert] = useState(false);
  const offAlertReportModal = () => {
    setReportAlert(false);
    goThemePage();
    setReportModal(false);
  };

  const reportUser = useCallback(() => {
    const reportedUserId = extractOtherUserId();
    const reportInfo = {
      reportedUserId,
      reportReason,
    };
    socket.emit('reportUser', reportInfo);
    setReportReson('');
    setReportAlert(true);
  }, []);

  const handleMyProfile = useCallback(() => {
    setMyProfileModal(!myProfileModal);
  }, [myProfileModal]);

  const handleOtherProfile = useCallback(() => {
    setOtherProfileModal(!otherProfileModal);
  }, [otherProfileModal]);

  return (
    <>
      <ChatHeader
        minutes={minutes}
        seconds={seconds}
        reportIconClick={onReportModal}
        onRefuse={onRefuse}
        onForExitModal={onForExitModal}
        aniTime={aniTime}
      ></ChatHeader>
      {reportAlert && (
        <AlertModal
          icon="success"
          title="신고 완료"
          msg="신고가 정상적으로 완료되었습니다."
          onClose={offAlertReportModal}
        />
      )}
      {alertModal && (
        <AlertModal
          icon="warning"
          title="연장 불가"
          msg="코인이 부족합니다."
          onClose={offAlertModal}
        />
      )}
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
            '불법 정보',
            '도배',
            '개인정보노출 및 강요',
          ]}
          onClick={selectReportReason}
          onClose={offReportModal}
          selectedReason={reportReason}
          doReport={reportUser}
        />
      )}
      {agreeModal && <AgreeModal />}
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
      <ChatMessages
        messageList={messageList}
        handleMyProFile={handleMyProfile}
        handleOhterProFile={handleOtherProfile}
      />
      {remainingTime !== 0 && (
        <ChatInputForm
          msgSubmitHandler={msgSubmitHandler}
          msg={msg}
          msgChangeHandler={msgChangeHandler}
        />
      )}
      {myProfileModal && (
        <ProfileModal
          user={'나'}
          reviewScore={Math.floor(Number(myScore))}
          favorite={myHobby}
          mood={myMood}
          handleModal={handleMyProfile}
        />
      )}
      {otherProfileModal && (
        <ProfileModal
          user={'상대방'}
          reviewScore={Math.floor(Number(otherScore))}
          favorite={otherHobby}
          mood={otherMood}
          handleModal={handleOtherProfile}
        />
      )}
    </>
  );
}

export default Chat;
