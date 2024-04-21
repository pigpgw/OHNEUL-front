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
  height: 33px;
  border-radius: 10px;
  border: 0;
  padding: 0 15px;
  margin: 10px;
  font-size: 10px;
  background: white;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);
`;
const MoodEditBtn = styled.img`
  height: 23px;
  border-radius: 10px;
  border: 0;
  padding: 0 5px;
  margin: 20px;
  cursor: pointer;
`;
const MoodBtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
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
    <MoodBtnContainer>
      <MoodBtn>{datas}</MoodBtn>

      <MoodEditBtn
        src={editButton}
        onClick={() => handleModal('mood')}
      ></MoodEditBtn>
      {open === 'mood' && <MyMoodModal />}
    </MoodBtnContainer>
  );
};

export default MyMood;
