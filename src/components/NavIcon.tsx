import styled from 'styled-components';
import { ReactComponent as Global } from '../assets/icons/global.svg';
import { ReactComponent as StopWatch } from '../assets/icons/stopwatch.svg';
import { ReactComponent as Timer } from '../assets/icons/timer.svg';

const NAV_ICONS = {
  세계시계: <Global width='50px' height='50px' />,
  스톱워치: <StopWatch width='50px' height='50px' />,
  타이머: <Timer width='50px' height='50px' />,
};

type NavIconProps = {
  title: keyof typeof NAV_ICONS;
};

const NavIcon = ({ title }: NavIconProps) => {
  return (
    <Container>
      {NAV_ICONS[title]}
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 15px;
  color: #fff;
`;

export default NavIcon;
