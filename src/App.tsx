import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StopWatchPage from './pages/StopWatchPage';
import WorldDigaitalClockPage from './pages/WorldDigaitalClockPage';
import TimerPage from './pages/TimerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WorldDigaitalClockPage />,
    children: [],
  },
  {
    path: '/stop-watch',
    element: <StopWatchPage />,
  },
  {
    path: '/timer',
    element: <TimerPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
