import styled from 'styled-components';

import NavButton from './NavButton';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import HourglassFull from '@material-ui/icons/HourglassFull';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { NavLink } from 'react-router-dom';

const NavBarBox = styled.div`
  width: 110px;
  height: 910px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.menu};
`;

const activeStyle = {
  background: '#bac8ff',
  color: 'black',
  textDecoration: 'none',
};

const defaultStyle = {
  textDecoration: 'none',
};

const NavBar = () => {
  return (
    <NavBarBox>
      <NavLink to='/alarm' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
        <NavButton>
          <AccessAlarmIcon />
          <span>자명종</span>
        </NavButton>
      </NavLink>
      <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
        <NavButton>
          <AvTimerIcon />
          <span>타이머</span>
        </NavButton>
      </NavLink>
      <NavLink to='/stopwatch' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
        <NavButton>
          <HourglassFull />
          <span>스톱워치</span>
        </NavButton>
      </NavLink>
      <NavLink to='/clock' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
        <NavButton>
          <AccessTimeIcon />
          <span>시계</span>
        </NavButton>
      </NavLink>
    </NavBarBox>
  );
};

export default NavBar;
