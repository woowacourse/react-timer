import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './GlobalStyles';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WorldTimePage from './components/pages/WorldTimePage/WorldTimePage';
import StopwatchPage from './components/pages/StopwatchPage/StopwatchPage';
import TimerPage from './components/pages/TimerPage/TimerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <WorldTimePage />,
      },
      {
        path: 'stopwatch',
        element: <StopwatchPage />,
      },
      {
        path: 'timer',
        element: <TimerPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
