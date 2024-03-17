import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ItemBtn,
  InfoText,
  Container,
  Title,
  ItemContainer,
  SubmitBtn,
  MarginTag,
} from 'Components/Common/Tag';

interface Hobby {
  hobby_id: number;
  hobby: string;
  clicked?: boolean;
}

function Hobby() {
  const [hobby, setHobby] = useState<Hobby[]>([]);

  useEffect(() => {
    async function getFbData(): Promise<void> {
      const res = await axios.get('http://localhost:3000/hobby');
      setHobby(
        res.data.map((item: Hobby): Hobby => ({ ...item, clicked: false })),
      );
    }
    getFbData();
  }, []);

  const clickBtn = (id: number) => {
    setHobby((prevHobby) =>
      prevHobby.map((item) =>
        item.hobby_id === id ? { ...item, clicked: !item.clicked } : item,
      ),
    );
  };

  return (
    <Container>
      <Title>평소 당신은?</Title>
      <ItemContainer>
        {hobby.map((category) => (
          <ItemBtn
            key={category.hobby_id}
            clicked={category.clicked}
            onClick={() => clickBtn(category.hobby_id)}
          >
            {category.hobby}
          </ItemBtn>
        ))}
      </ItemContainer>
      <InfoText>최소 1개, 최대 3개만 선택 가능</InfoText>
      <MarginTag margin={50}></MarginTag>
      <SubmitBtn>선택 완료</SubmitBtn>
    </Container>
  );
}

export default Hobby;
