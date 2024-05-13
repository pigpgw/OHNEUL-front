import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FetchDelHobby,
  FetchAddHobby,
  FetchUpdateHobby,
} from 'Components/Admin/FetchEditHobby';
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
const EditHobby: React.FC = () => {
  const [selectedHobby, setSelectedHobby] = useState('');
  const navigate = useNavigate();
  const handleAdd = async () => {
    try {
      await FetchAddHobby().then(() => alert('취미를 추가했습니다.'));
    } catch (error) {
      console.error('추가실패', error);
    }
  };
  const handleDelete = async () => {
    try {
      await FetchDelHobby(selectedHobby);
    } catch (error) {
      console.error('삭제실패', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await FetchUpdateHobby(selectedHobby);
    } catch (error) {
      console.error('업데이트실팽', error);
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
      <div>취미수정</div>
      <input
        type="text"
        value={selectedHobby}
        onChange={(e) => setSelectedHobby(e.target.value)}
      />
      <Button onClick={handleAdd}>취미 추가</Button>
      <Button onClick={handleDelete}>취미 삭제</Button>
      <Button onClick={handleUpdate}>취미 업데이트</Button>
    </Container>
  );
};

export default EditHobby;
