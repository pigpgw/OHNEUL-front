import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface User {
  user: {
    value: { user_id: string; refreshToken: string; provider: string };
    isLogin: boolean;
  };
}
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ Component, ...rest }: any) => {
  const isLogin = useSelector((state: User) => state.user.isLogin);

  return isLogin ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
