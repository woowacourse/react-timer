import { Outlet } from 'react-router';
import Header from './components/Header';
import TabBar from './components/TabBar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app">
      <Header title="스톱워치" />
      <Outlet />
      <TabBar />
    </div>
  );
};

export default Layout;
