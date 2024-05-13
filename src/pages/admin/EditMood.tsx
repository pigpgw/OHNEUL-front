import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FetchDelMood,
  FetchAddMood,
  FetchUpdateMood,
} from 'Components/Admin/FetchEditMood';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-top: 30vh;
  padding: 10vh;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: #0175ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const BackButton = styled.button`
  padding: 8px 16px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
function EditMood() {
  const [selectedMood, setSelectedMood] = useState('');
  const navigate = useNavigate();
  const handleAdd = async () => {
    try {
      await FetchAddMood().then(() => alert('분위기를 추가했습니다.'));
    } catch (error) {
      console.error('분위기 추가 실패', error);
    }
  };
  const handleDelete = async () => {
    try {
      await FetchDelMood(selectedMood).then(() =>
        alert('분위기를 삭제했습니다.'),
      );
    } catch (error) {
      console.error('분위기 삭제 실패', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await FetchUpdateMood(selectedMood).then(() =>
        alert('분위기를 업뎃했습니다.'),
      );
    } catch (error) {
      console.error('분위기 업데이트 실패', error);
    }
  };

  return (
    <Container>
      {' '}
      <BackButton
        onClick={() => {
          return navigate('/admin');
        }}
      >
        뒤로
      </BackButton>
      <div>분위기 수정!</div>
      <input
        type="text"
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
      />
      <Button onClick={handleAdd}>분위기 추가</Button>
      <Button onClick={handleDelete}>분위기 삭제</Button>
      <Button onClick={handleUpdate}>분위기 업데이트</Button>
    </Container>
  );
}

export default EditMood;
