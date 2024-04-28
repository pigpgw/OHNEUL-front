import React, { useEffect, useState } from 'react';
import {
  ItemBtn,
  InfoText,
  Container,
  Title,
  ItemContainer,
  SubmitBtn,
  CloseBtn,
} from 'Components/styles/Common';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { extractUserId } from 'utils/extractCookie';
import { useAddUserHobbyMutation } from 'hooks/useUserHobbyMutation';
import { fetchGetHobbys } from 'api/fetchHobby';
import styled from 'styled-components';

interface Hobby {
  hobby_id: number;
  hobby: string;
  clicked?: boolean;
}
interface MyHobbyModal {
  onClose: () => void;
}
function InterestModal({ onClose }: MyHobbyModal) {
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
  const userId = extractUserId();
  const { mutate: addUserHobby } = useAddUserHobbyMutation();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (userSelectHobby.length >= 4 || userSelectHobby.length === 0) {
      alert('취미는 1개 ~ 3개만 골라주세요');
      return;
    }
    try {
      await addUserHobby({
        user_id: userId,
        hobby_id: userSelectHobby,
      });
      alert('취미 수정에 성공하였습니다.');
    } catch (e) {
      alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
    }
    onClose();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: error</div>;
  return (
    <>
      <Wrapper>
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

export default InterestModal;
