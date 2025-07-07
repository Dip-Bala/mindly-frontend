import { Navigate } from 'react-router-dom';
import {type ReactNode} from 'react'
interface RequireAuthProps {
    children: ReactNode;
  }
  
export function RequireAuth({ children}: RequireAuthProps) {
  const token = localStorage.getItem('authorization');

  if (!token) {
    return <Navigate to={`/signin`} replace />;
  }
  return children;
}