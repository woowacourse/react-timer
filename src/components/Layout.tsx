import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const LayoutContent = styled.div`
  position: relative;
  width: 360px;
  margin: 40px 0;
  height: 100%;
  border-radius: 12px;
  background-color: #fff;
  overflow-y: auto;
`;

export default Layout;
