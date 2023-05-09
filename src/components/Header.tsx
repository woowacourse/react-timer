import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTitle = {
  '/': '세계시계',
  '/timer': '타이머',
  '/stop-watch': '스톱워치',
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Title>{HeaderTitle[pathname as keyof typeof HeaderTitle]}</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--green-300);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 18px;
`;

export default Header;
