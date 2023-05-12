import { Outlet } from 'react-router';
import TabBar from './components/TabBar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
      <TabBar />
    </div>
  );
};

export default Layout;
