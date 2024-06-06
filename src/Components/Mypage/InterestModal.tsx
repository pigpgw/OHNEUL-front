/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { ItemBtn, InfoText } from 'Components/styles/Common';
import { useQuery } from 'react-query';
import { extractUserId } from 'utils/extractCookie';
import { useAddUserHobbyMutation } from 'hooks/useUserHobbyMutation';
import fetchGetHobbys from 'api/fetchHobby';
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
        <BtnWrapper>
          <SubmitBtn onClick={handleSubmit}>선택 완료</SubmitBtn>
          <CloseBtn onClick={onClose}>닫기</CloseBtn>
        </BtnWrapper>
      </Wrapper>
    </>
  );
}

const Title = styled.p`
  margin-top: 4vh;
  font-size: 3vh;
  font-weight: 600;
  font-family: sans-serif;
`;

const ItemContainer = styled.div`
  width: 80%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 700px;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 75vh;
  position: relative;
  top: 13%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  /* height: 570px; */
  max-width: 500px;
  position: absolute;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SubmitBtn = styled.button`
  cursor: pointer;
  width: 80%;
  height: 5vh;
  max-height: 40px;
  color: white;
  background: #0075ff;
  border-radius: 5px;
  border: 0;
  font-size: 1.5vh;
  max-width: 500px;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  width: 80%;
  height: 5vh;
  max-height: 40px;
  color: white;
  background: gray;
  border-radius: 5px;
  border: 0;
  font-size: 1.5vh;
  max-width: 500px;
`;

export default InterestModal;
