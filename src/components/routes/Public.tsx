import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

interface IProps {
  component: React.ComponentType;
}

const Public: FC<IProps> = ({ component: Component }) => {
  const { auth } = useAuthContext();

  return auth.email ? <Navigate to="/dashboard" /> : <Component />;
};

export default Public;
