import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWatchPage from './pages/StopWatchPage';
import WorldDigaitalClockPage from './pages/WorldDigaitalClockPage';
import TimerPage from './pages/TimerPage';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <WorldDigaitalClockPage />,
      },
      {
        path: '/stop-watch',
        element: <StopWatchPage />,
      },
      {
        path: '/timer',
        element: <TimerPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
