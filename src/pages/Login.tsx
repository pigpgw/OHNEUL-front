import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const navigateFavorite = () => {
        navigate("/favorite")
    }
  return (
    <>
      <h2>로그인입니다.</h2>
      <button onClick={navigateFavorite}>선택 완료</button>
    </>
  );
}

export default Login;
