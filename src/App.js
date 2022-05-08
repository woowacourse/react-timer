import styled from 'styled-components';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useRoutes } from 'react-router-dom';
import TimerPage from './pages/TimerPage';

const ContentContainer = styled.div`
  display: flex;
`;

const App = () => {
  const routes = useRoutes([{ path: '/', element: <TimerPage /> }]);

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
