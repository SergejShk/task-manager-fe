import { Navigate, createBrowserRouter } from 'react-router-dom';

import SharedLayout from '../components/common/SharedLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Navigate to="/" />,
    children: [],
  },
]);
