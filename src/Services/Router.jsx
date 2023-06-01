import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage';
import NewsDetail from '../Pages/NewsDetail';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':id',
        element: <NewsDetail />,
      },
    ],
  },
]);

export default Router;
