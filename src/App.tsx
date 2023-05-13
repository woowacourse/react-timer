import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default App;
