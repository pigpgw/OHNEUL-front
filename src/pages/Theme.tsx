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
import { fetchGetThemes } from '../api/fetchTheme';

interface Themes {
  theme_id: number;
  theme: string;
  clicked?: boolean;
}

function Theme() {
  const {
    data: availableThemes,
    isLoading,
    isError,
  } = useQuery<Themes[], Error>(['get-mood'], fetchGetThemes, {
    onSuccess: () => console.log('mood data 가져오기 성공'),
    onError: () => console.log('mood data 가져오기 실패'),
  });

  const [theme, setTheme] = useState<Themes[]>([]);
  const userSelectMood = theme
    .filter((item) => item.clicked === true)
    .map((item) => item.theme)[0];

  useEffect(() => {
    if (availableThemes) setTheme(availableThemes);
    console.log('check theme',theme)
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

  //   const handleSubmit = () => {
  //     if (userSelectMood) {
  //       addUserMood({
  //         mood: userSelectMood,
  //       });
  //     } else {
  //       console.log('Please select a mood before submitting.');
  //     }
  //   };

  if (isLoading) return <div>mood data 가져오는 중입니다.</div>;
  if (isError) return <div>mood data 가져오기 실패</div>;

  return (
    <>
      <Container>
        <Title>오늘 당신은?</Title>
        <ItemContainer>
          {theme?.map((item) => (
            <ItemBtn
              key={item.theme_id}
              onClick={() => clickBtn(item.theme_id)}
              clicked={item.clicked}
            >
              {item.theme}
            </ItemBtn>
          ))}
        </ItemContainer>
        <InfoText>최대 1개만 선택 가능합니다.</InfoText>
        <MarginTag margin={50}></MarginTag>
        {/* <SubmitBtn onClick={handleSubmit}>선택 완료</SubmitBtn> */}
      </Container>
    </>
  );
}

export default Theme;
