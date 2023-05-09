import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Outlet />
        <NavBar />
      </Layout>
    </>
  );
}

export default App;
