/* eslint-disable object-shorthand */
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

interface User {
  mood: string | undefined;
  hobby: string | undefined;
  score: string | undefined;
}

function Chat({ socket }: any): JSX.Element {
  const userId = extractUserId();
  const otherId = extractOtherUserId();
  const { userCoinState } = useCoinQuery(userId);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );

  const [msg, setMsg] = useState<string>('');
  const [messageList, setMessageList] = useState<Message[]>([
    {
      type: 'startChat',
      msg: `상대방과 연결되었습니다.`,
      id: '',
    },
  ]);

  const [remainingTime, setRemainingTime] = useState<number>(300);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [aniTime, setAniTime] = useState(remainingTime);

  const [other, setOther] = useState<User>({
    mood: '',
    hobby: '',
    score: '',
  });

  const [user, setUser] = useState<User>({
    mood: '',
    hobby: '',
    score: '',
  });

  const [consent, setConsent] = useState<boolean>(false);

  const [consentModal, setConsentModal] = useState<boolean>(false);
  const [consentWaitModal, setConsentWaitModal] = useState<boolean>(false);
  const [forExitModal, setForExitModal] = useState<boolean>(false);
  const [exitModal, setExitModal] = useState<boolean>(false);
  const [reviewModal, setReviewModal] = useState<boolean>(false);

  const [reportAlert, setReportAlert] = useState(false);
  const [reportReason, setReportReson] = useState<string>('');
  const [reportModal, setReportModal] = useState<boolean>(false);

  const [alertModal, setAlertModal] = useState<boolean>(false);
  const [agreeModal, setAgreeModal] = useState(false);
  const [myProfileModal, setMyProfileModal] = useState(false);
  const [otherProfileModal, setOtherProfileModal] = useState(false);

  const [isInputActive, setIsInputActive] = useState<boolean>(false);

  const handleMessageContainerHeight = () => {
    return window.innerHeight - 140; // 이 값은 필요에 따라 조절 가능
  };

  useEffect(() => {
    if (!socket) return;
    const fetchSetUserInfo = async (id: string) => {
      try {
        const mood = await fetchUserMood(id);
        const hobby = await fecthGetUserHobby(id);
        const score = await fetchGetUserScore(id);
        if (id === otherId) {
          setOther({
            score: score,
            hobby: hobby.join(', '),
            mood: mood,
          });
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
        } else {
          setUser({
            score: score,
            hobby: hobby.join(', '),
            mood: mood,
          });
        }
      } catch (error) {
        console.error('기분, 취미 가져오기 실패', error);
      }
    };

    fetchSetUserInfo(userId);
    fetchSetUserInfo(otherId);
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
    function sMessageCallback(messageData: { data: string; id: string }) {
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
      if (totalTime < 180) {
        setExitModal(true);
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
    setReportAlert(true);
  }, [reportReason]);

  const handleMyProfile = useCallback(() => {
    setMyProfileModal(!myProfileModal);
  }, [myProfileModal]);

  const handleOtherProfile = useCallback(() => {
    setOtherProfileModal(!otherProfileModal);
  }, [otherProfileModal]);

  useEffect(() => {
    const handleDisconnect = () => {
      setExitModal(true);
    };

    socket.on('disconnect', handleDisconnect);

    return () => {
      socket.off('disconnect', handleDisconnect);
    };
  }, [socket]);

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
          btn1="확인"
          onClose={offAlertReportModal}
        />
      )}
      {alertModal && (
        <AlertModal
          icon="warning"
          title="연장 불가"
          msg="코인이 부족합니다."
          btn1="확인"
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
          setReportReson={setReportReson}
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
        style={{ maxHeight: `${handleMessageContainerHeight()}px` }} // 스타일 전달
      />
      {remainingTime !== 0 && (
        <ChatInputForm
          msgSubmitHandler={msgSubmitHandler}
          msg={msg}
          msgChangeHandler={msgChangeHandler}
          onFocus={() => setIsInputActive(true)} // 입력창이 활성화될 때
          onBlur={() => setIsInputActive(false)} // 입력창이 비활성화될 때
        />
      )}
      {myProfileModal && (
        <ProfileModal
          user={'나'}
          reviewScore={Number(user.score)}
          favorite={user.hobby}
          mood={user.mood}
          handleModal={handleMyProfile}
        />
      )}
      {otherProfileModal && (
        <ProfileModal
          user={'상대방'}
          reviewScore={Number(other.score)}
          favorite={other.hobby}
          mood={other.mood}
          handleModal={handleOtherProfile}
        />
      )}
    </>
  );
}

export default Chat;
