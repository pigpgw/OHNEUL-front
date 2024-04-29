import { useEffect, useMemo, useState } from 'react';
import { extractUserId } from 'utils/extractCookie';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import InfoHeader from 'Components/Common/InfoHeader';
import ButtonList from 'Components/Common/ButtonList';
import InfoFooter from 'Components/Common/InfoFooter';
import Button from 'Components/Common/Button';
import { Container, SubmitBtn } from '../Components/styles/Common';
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
  } = useQuery<Themes[], Error>(['get-theme'], fetchGetThemes, {
    onSuccess: () => console.log('theme data 가져오기 성공'),
    onError: () => console.log('theme data 가져오기 실패'),
  });

  const [theme, setTheme] = useState<Themes[]>([]);
  const [wait, setWait] = useState<boolean>(false);
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

  const matchingcStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!userSelectTheme) alert('최소 1개를 선택해주세요');
    else {
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
        const other = otherId.filter(
          (item: any) => item.socketId !== socket.id,
        )[0].uuid;
        document.cookie = `other=${other}`;
        navigate('/chat');
      } else {
        console.log('상대방 정보가 없습니다.');
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

  if (isLoading) return <div>theme data 가져오는 중입니다.</div>;
  if (isError) return <div>theme data 가져오기 실패</div>;

  return (
    <>
      <Container>
        <InfoHeader
          infoTitle="오늘 당신은?"
          infoContent="대화 주제를 선택해주세요"
        />
        <ButtonList items={theme} onClick={clickBtn} />
        {wait && <WaitModal onClose={onClose} />}
        <InfoFooter infoText="최대 1개만 선택 가능합니다." />
        <Button disabled={wait} onClick={matchingcStart}>선택 완료</Button>
      </Container>
    </>
  );
}

export default Theme;
