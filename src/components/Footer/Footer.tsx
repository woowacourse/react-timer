import { Link, useLocation } from 'react-router-dom';
import { WorldTimeIcon } from '../../assets/WorldTimeIcon';
import { StopwatchIcon } from '../../assets/StopwatchIcon';
import { TimerIcon } from '../../assets/TimerIcon';
import * as Styled from './Footer.styled';

const Footer = () => {
  const location = useLocation();

  return (
    <Styled.Footer>
      <Link to="/">
        <Styled.IconWrapper isActive={location.pathname === '/'}>
          <WorldTimeIcon isActive={location.pathname === '/'} />
          세계시계
        </Styled.IconWrapper>
      </Link>

      <Link to="/stopwatch">
        <Styled.IconWrapper isActive={location.pathname === '/stopwatch'}>
          <StopwatchIcon isActive={location.pathname === '/stopwatch'} />
          스톱워치
        </Styled.IconWrapper>
      </Link>

      <Link to="/timer">
        <Styled.IconWrapper isActive={location.pathname === '/timer'}>
          <TimerIcon isActive={location.pathname === '/timer'} />
          타이머
        </Styled.IconWrapper>
      </Link>
    </Styled.Footer>
  );
};
export default Footer;
