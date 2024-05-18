import { useEffect, useMemo, useState } from 'react';
import { extractUserId } from 'utils/extractCookie';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import InfoHeader from 'Components/Common/InfoHeader';
import ButtonList from 'Components/Common/ButtonList';
import InfoFooter from 'Components/Common/InfoFooter';
import Button from 'Components/Common/Button';
import AlertModal from 'Components/Modal/AlertModal';
import LoadingBox from 'Components/Common/LoadingBox/LoadingBox';
import { motion } from 'framer-motion';
import { Container } from '../Components/styles/Common';
import { fetchGetThemes } from '../api/fetchTheme';
import { WaitModal } from '../Components/Modal/ChatModal';

interface Themes {
  theme_id: number;
  theme: string;
  clicked?: boolean;
}

function Theme({ socket }: any) {
  const {
    data: availableThemes,
    isLoading,
    isError,
  } = useQuery<Themes[], Error>(['get-theme'], fetchGetThemes);

  const [theme, setTheme] = useState<Themes[]>([]);
  const [wait, setWait] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useState(false);
  const userSelectTheme: string = useMemo(() => {
    return theme
      .filter((item) => item.clicked === true)
      .map((item) => item.theme)[0];
  }, [theme]);

  useEffect(() => {
    if (availableThemes) setTheme(availableThemes);
  }, [availableThemes]);

  const clickBtn = (id: number) => {
    setTheme((prev) =>
      prev.map((item) =>
        item.theme_id === id
          ? { ...item, clicked: true }
          : { ...item, clicked: false },
      ),
    );
  };

  const offAlertModal = () => {
    setAlertModal(false);
  };

  const matchingcStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!userSelectTheme) {
      setAlertModal(true);
    } else {
      const uuid = extractUserId();
      e.preventDefault();
      const data = {
        uuid,
        userSelectTheme,
      };
      socket.emit('selectTheme', data);
    }
  };

  interface uuidList {
    socketId: string;
    uuid: string;
  }

  const navigate = useNavigate();
  useEffect(() => {
    function waitMessageCallback() {
      setWait(true);
    }

    function startMessageCallback(otherId: uuidList[]) {
      setWait(false);
      if (otherId && otherId.length > 0) {
        const other = otherId.filter((item) => item.socketId !== socket.id)[0]
          .uuid;
        document.cookie = `other=${other}`;
        navigate('/chat');
      }
    }
    socket.on('wait', waitMessageCallback);
    socket.on('start', startMessageCallback);
    return () => {
      socket.off('wait', waitMessageCallback);
      socket.off('start', startMessageCallback);
    };
  }, [wait]);

  const onClose = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    socket.emit('userExit');
    setWait(false);
  };

  return (
    <>
      <motion.div
        className="loginPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
      >
        {alertModal && (
          <AlertModal
            icon="warning"
            title="주제를 선택해주세요"
            msg="한개의 대화 주제를 골라주세요"
            btn1="확인"
            onClose={offAlertModal}
          />
        )}
        <Container>
          <InfoHeader
            infoTitle="오늘 당신은?"
            infoContent="대화 주제를 선택해주세요"
          />
          <ButtonList
            items={theme}
            onClick={clickBtn}
            isLoading={isLoading}
            isError={isError}
          />
          {wait && <WaitModal onClose={onClose} />}
          <InfoFooter infoText="최대 1개만 선택 가능합니다." />
          <Button
            disabled={wait}
            onClick={matchingcStart}
            width="80%"
            height="5%"
            maxheight="100px"
            fontSize="1.5vh"
            maxwidth="500px"
          >
            선택 완료
          </Button>
        </Container>
      </motion.div>
    </>
  );
}

export default Theme;
