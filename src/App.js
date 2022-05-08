import styled from 'styled-components';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useRoutes } from 'react-router-dom';

import TimerPage from './pages/TimerPage';
import ClockPage from './pages/ClockPage';
import StopWatchPage from './pages/StopWatchPage';
import AlarmPage from './pages/AlarmPage';

const ContentContainer = styled.div`
  display: flex;
`;

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <TimerPage /> },
    { path: '/clock', element: <ClockPage /> },
    { path: '/stopwatch', element: <StopWatchPage /> },
    { path: '/alarm', element: <AlarmPage /> },
  ]);

  return (
    <>
      <Header />
      <ContentContainer>
        <NavBar />
        {routes}
      </ContentContainer>
    </>
  );
};

export default App;
