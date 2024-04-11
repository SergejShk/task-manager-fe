import { lazy } from 'react';

export const Login = lazy(() => import('../components/auth/Login'));
export const SignUp = lazy(() => import('../components/auth/SignUp'));
export const Dashboard = lazy(
  () => import('../components/dashboard/Dashboard')
);
export const Statistic = lazy(
  () => import('../components/statistic/Statistic')
);
