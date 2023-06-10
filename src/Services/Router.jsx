import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage';
import MovieDetail from '../Pages/MovieDetail';

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
        element: <MovieDetail />,
      },
    ],
  },
]);

export default Router;
