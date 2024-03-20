import React, { useEffect, useState } from 'react';
import {
  ItemBtn,
  InfoText,
  Container,
  Title,
  ItemContainer,
  SubmitBtn,
  MarginTag,
} from 'Components/Common/Tag';
import { useQuery } from 'react-query';
import { fetchMood } from 'api/fetchMood';

function Mood() {
  interface MoodTs {
    mood_id: number;
    mood: string;
    clicked?: boolean;
  }

  const {
    data: availableMoods,
    isLoading,
    isError,
  } = useQuery(['get-mood'], fetchMood, {
    onSuccess: () => console.log('mood data 가져오기 성공'),
    onError: () => console.log('mood data 가져오기 실패'),
  });

  const [mood, setMood] = useState<MoodTs[]>([]);

  useEffect(() => {
    if (availableMoods) setMood(availableMoods);
  }, [availableMoods]);

  if (isLoading) return <div>mood data 가져오는 중입니다.</div>;
  if (isError) return <div>mood data 가져오기 실패</div>;

  return (
    <>
      <Container>
        <Title>오늘 당신은?</Title>
        <ItemContainer>
          {availableMoods?.map((item) => (
            <ItemBtn key={item.mood_id}>{item.mood}</ItemBtn>
          ))}
        </ItemContainer>
        <InfoText>최대 1개만 선택 가능합니다.</InfoText>
        <MarginTag margin={50}></MarginTag>
        <SubmitBtn>선택 완료</SubmitBtn>
      </Container>
    </>
  );
}

export default Mood;
