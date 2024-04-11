import { Navigate, createBrowserRouter } from 'react-router-dom';

import SharedLayout from '../components/common/SharedLayout';
import Public from '../components/routes/Public';
import Private from '../components/routes/Private';

import { Dashboard, Login, SignUp, Statistic } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        element: <Public component={Login} />,
      },
      {
        path: 'sign-up',
        element: <Public component={SignUp} />,
      },
      {
        path: 'dashboard',
        element: <Private component={Dashboard} />,
      },
      {
        path: 'statistic',
        element: <Private component={Statistic} />,
      },
    ],
  },
]);
