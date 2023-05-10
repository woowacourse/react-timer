import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>
        <Header />
        <Wrapper>{children}</Wrapper>
        <NavBar />
      </LayoutContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 390px;
  height: 844px;

  background-color: #fff;
`;

const Wrapper = styled.div`
  flex: 1;

  width: 100%;

  padding: 0px 24px;

  overflow: scroll;
`;

export default Layout;
