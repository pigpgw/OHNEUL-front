import React, { useEffect, useState } from 'react';
import {
  InfoText,
  Container,
  Title,
  ThemeItemContainer,
  ThemeItemBtn,
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

function Theme(socket: any) {
  const {
    data: availableThemes,
    isLoading,
    isError,
  } = useQuery<Themes[], Error>(['get-theme'], fetchGetThemes, {
    onSuccess: () => console.log('theme data 가져오기 성공'),
    onError: () => console.log('theme data 가져오기 실패'),
  });

  const [theme, setTheme] = useState<Themes[]>([]);
  const userSelectTheme = theme
    .filter((item) => item.clicked === true)
    .map((item) => item.theme)[0];

  useEffect(() => {
    if (availableThemes) setTheme(availableThemes);
    console.log('check theme', theme);
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

  const handleSubmit = () => {
    if (userSelectTheme) {
      console.log('유저가 선택한 주제', userSelectTheme);
    } else {
      console.log('Please select a theme before submitting.');
    }
  };

  if (isLoading) return <div>theme data 가져오는 중입니다.</div>;
  if (isError) return <div>theme data 가져오기 실패</div>;

  return (
    <>
      <Container>
        <Title>오늘 당신은?</Title>
        <ThemeItemContainer>
          {theme?.map((item) => (
            <ThemeItemBtn
              key={item.theme_id}
              onClick={() => clickBtn(item.theme_id)}
              clicked={item.clicked}
            >
              {item.theme}
            </ThemeItemBtn>
          ))}
        </ThemeItemContainer>
        <InfoText>최대 1개만 선택 가능합니다.</InfoText>
        <MarginTag margin={50}></MarginTag>
        <SubmitBtn onClick={handleSubmit}>선택 완료</SubmitBtn>
      </Container>
    </>
  );
}

export default Theme;
