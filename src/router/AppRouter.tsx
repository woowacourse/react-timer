import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StopWatchPage from '../pages/StopWatch';
import TimerPage from '../pages/Timer';
import WorldTimePage from '../pages/WorldTime';
import Layout from '../Layout';

// FIXME: 기본 홈페이지 라우팅이 안되는 이슈
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/timer',
        element: <TimerPage />,
      },
      {
        path: '/stopwatch',
        element: <StopWatchPage />,
      },
      {
        path: '/worldtime',
        element: <WorldTimePage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
