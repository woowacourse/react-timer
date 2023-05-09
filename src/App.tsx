import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StopWatchPage from './pages/StopWatchPage';
import WorldDigaitalClockPage from './pages/WorldDigaitalClockPage';

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
