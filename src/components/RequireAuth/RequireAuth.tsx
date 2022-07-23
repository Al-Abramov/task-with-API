import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const token = getCookie('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
