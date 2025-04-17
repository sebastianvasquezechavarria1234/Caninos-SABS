import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../feacture/landing/pages/AuthContext';
// asegúrate de importar bien

const ProtedRouters = () => {
  const { token } = useContext(AuthContext); // o puedes usar localStorage.getItem('token')

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtedRouters;
