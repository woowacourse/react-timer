import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StopWatchPage from '../pages/StopWatch';
import TimerPage from '../pages/Timer';
import WorldTimePage from '../pages/WorldTime';
import Layout from '../Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <WorldTimePage />,
        },
      ],
    },
    {
      path: '/timer',
      element: <Layout />,
      children: [
        {
          path: '/timer',
          element: <TimerPage />,
        },
      ],
    },
    {
      path: '/stopwatch',
      element: <Layout />,
      children: [
        {
          path: '/stopwatch',
          element: <StopWatchPage />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
