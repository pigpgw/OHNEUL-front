import axios from 'axios';
import React, { useState, useEffect } from 'react';
import editButton from 'assets/images/editButton.png';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';
import InterestModal from 'Components/Mypage/InterestModal';
import { useQuery } from 'react-query';

interface HobbyData {
  hobby_id: number;
  hobby: string;
}
const HobbyBtn = styled.button`
  border-radius: 10px;
  border: 0;
  padding: 1.5vh 2vh;
  margin: 15px;
  font-size: 2vh;
  background: white;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);
`;
const HobbyEditBtn = styled.img`
  cursor: pointer;
  width: 4vh;
  margin: 0 1vh 0.5vh 1vh;
  max-width: 30px;
`;
const HobbyBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Interest = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };
  const [flatform, token, rewardCoin, userId] = meltedCookie();

  const [datas, setData] = useState<HobbyData[]>([]);
  const handleCloseModal = () => {
    setOpen(null);
  };
  interface HobbyTs {
    hobby_id: number;
    hobby: string;
  }
  const { isLoading, isError, data } = useQuery<HobbyTs | any>(
    ['myhobby'],
    async () => {
      const allHobbiesResponse: any = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/hobbies`)
        .then((res) => res.data);
      const userHobbieseResponse: any = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/user-hobby/${userId}`)
        .then((res) => res.data);
      const hobby = () => {
        const res = [];
        for (let i = 0; i < allHobbiesResponse.length; i += 1) {
          for (let j = 0; j < userHobbieseResponse.length; j += 1) {
            if (
              allHobbiesResponse[i].hobby_id ===
              userHobbieseResponse[j].hobby_id
            ) {
              res.push(allHobbiesResponse[i]);
            }
          }
        }
        setData(res);
      };
      return hobby();
    },
    { refetchInterval: 3000 },
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>취미를 가져오기를 실패했습니다.</div>;

  return (
    <>
      <HobbyBtnContainer>
        <Div>
          <Title>나의 관심사</Title>
          <HobbyEditBtn
            src={editButton}
            onClick={() => handleModal('interest')}
          />
        </Div>
        <Wrapper>
          {datas.map((el, id) => (
            <HobbyBtn key={id}>{el.hobby}</HobbyBtn>
          ))}
        </Wrapper>
      </HobbyBtnContainer>
      {open === 'interest' && <InterestModal onClose={handleCloseModal} />}
    </>
  );
};

export default Interest;

const Title = styled.p`
  font-size: 1.1rem;
  margin: 0;
  border: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 20px;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
`;
