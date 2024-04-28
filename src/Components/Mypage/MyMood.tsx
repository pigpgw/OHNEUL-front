import axios from 'axios';
import React, { useState, useEffect } from 'react';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';
import MyMoodModal from 'Components/Mypage/MyMoodModal';
import editButton from 'assets/images/editButton.png';

interface MoodData {
  mood: string;
}
const MoodBtn = styled.button`
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding:10px 15px;
  margin: 15px;
  font-size: 1rem;
  background: white;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);
`;
const MoodEditBtn = styled.img`
  cursor: pointer;
  margin: 5px;
  width: 8%;
  max-width: 30px;
`;
const MoodBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MyMood = () => {
  const [open, setOpen] = useState<string | null>(null);
  const handleModal = (itemName: any) => {
    setOpen(open === itemName ? null : itemName);
  };
  const [flatform, token, rewardCoin, userId] = meltedCookie();
  const [datas, setData] = useState<string[]>([]);
  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const allMoodResponse: any = await axios
          .get(`${process.env.REACT_APP_BASE_URL}/moods`)
          .then((res) => res.data);
        const userMoodResponse: any = await axios
          .get(`${process.env.REACT_APP_BASE_URL}/users/${userId}`)
          .then((res) => res.data.mood_id);

        const mood = (): void => {
          const res = [];

          for (let i = 0; i < allMoodResponse.length; i += 1) {
            if (allMoodResponse[i].mood_id === userMoodResponse) {
              res.push(allMoodResponse[i].mood);
            }
          }
          setData(res);
   
        };
        mood();
      } catch (error) {
        console.error(error);
      }
    };
    fetchMoods();
  }, []);

  return (
    <>
      <MoodBtnContainer>
        <Div>
          <Title>현재 기분</Title>
          <MoodEditBtn src={editButton} onClick={() => handleModal('mood')} />
        </Div>
        <Wrapper>
          <MoodBtn>{datas}</MoodBtn>
        </Wrapper>
      </MoodBtnContainer>
      {open === 'mood' && <MyMoodModal />}
    </>
  );
};

const Title = styled.p`
  font-size: 1.2rem;
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

export default MyMood;
