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
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAddUserHobbyMutation } from '../hooks/useAddUserHobbyMutation';
import { fetchGetHobbys } from '../api/fetchUserHobby';

interface Hobby {
  hobby_id: number;
  hobby: string;
  clicked?: boolean;
}

function Hobby() {
  const [hobby, setHobby] = useState<Hobby[]>([]);
  const userSelectHobby = hobby
    .filter((item) => item.clicked === true)
    .map((item) => item.hobby_id);

  const {
    isLoading,
    error,
    data: availableHobbies,
  } = useQuery('get-hobbys', fetchGetHobbys, {
    onSuccess: () => console.log('가져오기 성공'),
    onError: () => console.log('error '),
  });

  useEffect(() => {
    if (availableHobbies) setHobby(availableHobbies);
  }, [availableHobbies]);

  const clickBtn = (id: number) => {
    setHobby((prevHobby) =>
      prevHobby.map((item) =>
        item.hobby_id === id ? { ...item, clicked: !item.clicked } : item,
      ),
    );
  };

  const { mutate: addUserHobby } = useAddUserHobbyMutation();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (userSelectHobby.length >= 4 || userSelectHobby.length === 0) {
      alert('취미는 1개 ~ 3개만 골라주세요');
      return;
    }

    try {
      await addUserHobby({
        user_id: 23,
        hobby_id: userSelectHobby,
      });
      navigate('/mood');
    } catch (e) {
      alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
      console.error(e);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: error</div>;

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
      <SubmitBtn onClick={handleSubmit}>선택 완료</SubmitBtn>
    </Container>
  );
}

export default Hobby;
