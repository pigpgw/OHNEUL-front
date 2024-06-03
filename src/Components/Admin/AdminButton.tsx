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
  font-size: 2vh;
`;

function AdminButton() {
  const [isAdmin] = meltedCookie();
  const navigate = useNavigate();
  const navigateToAdmin = () => {
    navigate('/admin');
  };

  return (
    <>
      {isAdmin ? <Button onClick={() => navigateToAdmin()}>ADMIN</Button> : ''}
    </>
  );
}

export default AdminButton;
