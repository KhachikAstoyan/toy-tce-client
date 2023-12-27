import { createBrowserRouter } from 'react-router-dom';
import { Execute } from './Execute/Execute';
import { Login } from './Login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Execute />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
