import React from 'react';
import {
  ItemBtn,
  InfoText,
  Container,
  Title,
  ItemContainer,
  SubmitBtn,
  MarginTag,
} from 'Components/Common/Tag';

function Mood() {
  return (
    <>
    <Container>
      <Title>오늘 당신은?</Title>
      <ItemContainer>
      </ItemContainer>
      <InfoText>최대 1개만 선택 가능합니다.</InfoText>
      <MarginTag margin={50}></MarginTag>
      <SubmitBtn>
        선택 완료
      </SubmitBtn>
    </Container>
    </>
  );
}

export default Mood;
