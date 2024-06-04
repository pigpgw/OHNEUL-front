import { Navigate, Outlet } from 'react-router-dom';
import { extractUserId } from 'utils/extractCookie';

const PrivateRoute = () => {
  const isLogin = extractUserId();

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
