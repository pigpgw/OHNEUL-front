import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import meltedCookie from 'utils/meltedCookie';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: #dbdbdb;
  cursor: pointer;
  outline: inherit;
`;
// interface User {
//   user: {
//     value: {
//       isAdmin: boolean;
//     };
//   };
// }

function AdminButton() {
  const [flatform, token, rewardCoin, userId, isAdmin] = meltedCookie();
  const navigate = useNavigate();
  const navigateToAdmin = () => {
    navigate('/admin');
  };

  //   const isAdmin = useSelector((state: User) => state.user.isAdmin);
  // 1로그인시 쿠키에서 추출 후 스토어에 어드민 저장 이후 마이페이지에서 불러오기
  // 2쿠키에서 추출 후 바로 적용.

  return (
    <>
      {isAdmin ? <Button onClick={() => navigateToAdmin()}>ADMIN</Button> : ''}
    </>
  );
}

export default AdminButton;
