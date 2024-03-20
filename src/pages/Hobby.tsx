import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
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

interface Hobby {
  hobby_id: number;
  hobby: string;
  clicked?: boolean;
}

function Hobby() {
  const queryClient = useQueryClient();
  const [hobby, setHobby] = useState<Hobby[]>([]);
  const userSelectHobby = hobby
    .filter((item) => item.clicked === true)
    .map((item) => item.hobby_id);

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

  interface UserHobby {
    user_id: number;
    hobby_id: number[];
  }

  interface AddUserHobbyResponse {
    message: string;
    data: UserHobby;
  }

  const addUserHobby = (
    userHobby: UserHobby,
  ): Promise<AddUserHobbyResponse> => {
    return axios.post('http://localhost:3000/user-hobby', userHobby);
    // return axios.post('http://localhost:3000/user-hobby/join')
  };

  const { mutateAsync: addHobbyMutation } = useMutation({
    mutationFn: addUserHobby,
    onSuccess: () => {
      console.log('post user select hobby');
    },
  });

  const navigate = useNavigate();
  function navigateTitle() {
    navigate('/mood');
  }

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
      <SubmitBtn
        onClick={async () => {
          try {
            if (userSelectHobby.length === 0) {
              alert('최소 하나 이상 골라주세용');
              return;
            }
            await addHobbyMutation({
              user_id: 23,
              hobby_id: userSelectHobby,
            });
            navigateTitle();
          } catch (e) {
            console.error(e);
          }
        }}
      >
        선택 완료
      </SubmitBtn>
    </Container>
  );
}

export default Hobby;
