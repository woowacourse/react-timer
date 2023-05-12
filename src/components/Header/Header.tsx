import { useLocation } from 'react-router-dom';
import * as Styled from './Header.styled';

const getTitle = (pathname: string) => {
  switch (pathname) {
    case '/':
      return '세계시계';
    case '/stopwatch':
      return '스톱워치';
    case '/timer':
      return '타이머';
  }
};

const Header = () => {
  const location = useLocation();

  return <Styled.Header>{getTitle(location.pathname)}</Styled.Header>;
};

export default Header;
