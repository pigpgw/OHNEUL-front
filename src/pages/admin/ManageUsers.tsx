import React, { useState } from 'react';
import styled from 'styled-components';
import delUser from 'Components/Admin/FetchManageUsers';
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

function ManageUsers() {
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await delUser(selectedUser).then(() => alert('유저를 삭제했습니다.'));
    } catch (error) {
      console.error('유저삭제실패', error);
    }
  };
  const BackButton = styled.button`
    padding: 8px 16px;

    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  return (
    <Container>
      <BackButton
        onClick={() => {
          return navigate('/admin');
        }}
      >
        뒤로
      </BackButton>
      <div>회원관리</div>
      <input
        type="text"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      />
      <Button onClick={handleDelete}>유저삭제</Button>
    </Container>
  );
}

export default ManageUsers;
