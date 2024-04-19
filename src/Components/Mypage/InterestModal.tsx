import React, { useEffect, useState } from 'react';
import {
  ItemBtn,
  InfoText,
  Container,
  Title,
  ItemContainer,
  SubmitBtn,
  MarginTag,
} from 'Components/styles/Common';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { extractUserId } from 'utils/extractCookie';
import { useAddUserHobbyMutation } from 'hooks/useUserHobbyMutation';
import { fetchGetHobbys } from 'api/fetchHobby';
import { fetchGetOneUserHobby } from 'api/fetchGetOneUser';
import { useDispatch } from 'react-redux';
import { setHobby } from 'stores/slices/hobbySlice';

interface Hobby {
  hobby_id: number;
  hobby: string;
  clicked?: boolean;
}

function InterestModal() {
  const dispatch = useDispatch();
  const useCheckHobbiesAndNavigate = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const fetchDataAndNavigate = async () => {
        try {
          const user = await fetchGetOneUserHobby();
          if (Object.keys(user).length > 0) {
            navigate('/mypage');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchDataAndNavigate();
    }, [navigate]);
  };

  useCheckHobbiesAndNavigate();

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
      navigate('/mypage');
    } catch (e) {
      alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
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

export default InterestModal;
