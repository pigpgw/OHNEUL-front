import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, clearAuth } from '../../stores/slices/userSlice';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (): void => {
    dispatch(logout());
    dispatch(clearAuth());
    // 로컬스토리지
    navigate('/');
  };
  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default Logout;
