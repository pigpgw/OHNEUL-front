import React, { useState } from 'react';
import styled from 'styled-components';
import FetchPostAnnouncement from 'api/admin/FetchPostAnnouncement';
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

function PostAnnouncement() {
  const [title, setTitle] = useState('');
  const [notice, setNotice] = useState('');
  const navigate = useNavigate();
  const handlePostAnnouncement = async () => {
    try {
      await FetchPostAnnouncement(title, notice).then(() =>
        alert('공지를 추가했습니다.'),
      );
    } catch (error) {
      console.error('공지등록실패', error);
    }
  };

  return (
    <Container>
      <BackButton
        onClick={() => {
          return navigate('/admin');
        }}
      >
        뒤로
      </BackButton>
      <div>공지사항 등록</div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Notice"
        value={notice}
        onChange={(e) => setNotice(e.target.value)}
      />
      <Button onClick={handlePostAnnouncement}>공지사항 올리기</Button>
    </Container>
  );
}

export default PostAnnouncement;
