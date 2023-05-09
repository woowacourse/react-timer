import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <LayoutContent>{children}</LayoutContent>
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
  position: relative;
  width: 360px;
  max-height: 844px;
  margin: 40px 0;
  height: 100%;
  border-radius: 12px;
  background-color: #fff;
  overflow-y: auto;
`;

export default Layout;
