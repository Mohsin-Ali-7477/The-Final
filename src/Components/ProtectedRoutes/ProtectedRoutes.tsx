import { Navigate } from 'react-router-dom';
import { useAuth } from './../AuthContext/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { AuthUser } = useAuth();

  if (!AuthUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
