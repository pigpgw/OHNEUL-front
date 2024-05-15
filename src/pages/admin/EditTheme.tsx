import React, { useState } from 'react';
import styled from 'styled-components';
import { FetchDelTheme, FetchAddTheme } from 'api/admin/FetchEditTheme';
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
function EditTheme() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const navigate = useNavigate();
  const handleAdd = async () => {
    try {
      await FetchAddTheme(selectedTheme).then(() =>
        alert('테마를 추가했습니다.'),
      );
    } catch (error) {
      console.error('테마 추가 실패', error);
    }
  };
  const handleDelete = async () => {
    try {
      await FetchDelTheme(selectedTheme).then(() =>
        alert('테마를 삭제했습니다.'),
      );
    } catch (error) {
      console.error('테마 삭제 실패', error);
    }
  };

  // const handleUpdate = async () => {
  //   try {
  //     await FetchUpdateTheme(selectedTheme).then(() =>
  //       alert('테마를 업ㅇ데이트했습니다.'),
  //     );
  //   } catch (error) {
  //     console.error('업뎃없댓', error);
  //   }
  // };

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
      <div>테마 수정</div>
      <input
        type="text"
        value={selectedTheme}
        onChange={(e) => setSelectedTheme(e.target.value)}
      />
      <Button onClick={handleAdd}>테마 추가</Button>
      <Button onClick={handleDelete}>테마 삭제</Button>
      {/* <Button onClick={handleUpdate}>테마 업뎃</Button> */}
    </Container>
  );
}

export default EditTheme;
