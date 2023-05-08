import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WorldDigaitalClockPage from './pages/WorldDigaitalClockPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WorldDigaitalClockPage />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
