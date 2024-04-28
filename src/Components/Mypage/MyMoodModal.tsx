import React, { useEffect, useState } from 'react';
import {
  ItemBtn,
  Container,
  ItemContainer,
  SubmitBtn,
  CloseBtn,
} from 'Components/styles/Common';
import { useQuery } from 'react-query';
import { fetchGetMood } from 'api/fetchMood';
import { useAddUserMoodMutation } from 'hooks/useUserMoodMutation';
import styled from 'styled-components';

interface MoodTs {
  mood_id: number;
  mood: string;
  clicked?: boolean;
}
interface MyMoodModal {
  onClose: () => void;
}
function MyMood({ onClose }: MyMoodModal) {
  const {
    data: availableMoods,
    isLoading,
    isError,
  } = useQuery<MoodTs[], Error>(['get-mood'], fetchGetMood, {
    onSuccess: () => console.log('mood data 가져오기 성공'),
    onError: () => console.log('mood data 가져오기 실패'),
  });

  const [mood, setMood] = useState<MoodTs[]>([]);
  const userSelectMood = mood
    .filter((item) => item.clicked === true)
    .map((item) => item.mood_id)[0];

  useEffect(() => {
    if (availableMoods) setMood(availableMoods);

    console.log(availableMoods);
    console.log(mood);
  }, [availableMoods]);

  const clickBtn = (id: number) => {
    setMood((prev) =>
      prev.map((item) =>
        item.mood_id === id ? { ...item, clicked: !item.clicked } : item,
      ),
    );
  };

  const { mutate: addUserMood } = useAddUserMoodMutation();

  const handleSubmit = () => {
    if (userSelectMood) {
      addUserMood({
        mood_id: userSelectMood,
      });
      alert('기분 수정에 성공하였습니다.');
      onClose();
    } else {
      alert('적어도 하나의 기분을 선택해주세요');
    }
  };

  if (isLoading) return <div>mood data 가져오는 중입니다.</div>;
  if (isError) return <div>mood data 가져오기 실패</div>;

  return (
    <>
      <Wrapper>
        <ItemContainer>
          {mood?.map((item) => (
            <ItemBtn
              key={item.mood_id}
              onClick={() => clickBtn(item.mood_id)}
              clicked={item.clicked}
            >
              {item.mood}
            </ItemBtn>
          ))}
        </ItemContainer>
        <SubmitBtn onClick={handleSubmit}>선택 완료</SubmitBtn>

        <CloseBtn onClick={onClose}>닫기</CloseBtn>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 300px;
  width: 60%;
  height: 60%;
  border: 1px solid black;
  height: 50vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    bottom: 150px;
    height: 70%;
  }
`;

export default MyMood;
