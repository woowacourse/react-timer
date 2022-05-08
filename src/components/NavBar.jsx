import styled from 'styled-components';

import NavButton from './NavButton';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import HourglassFull from '@material-ui/icons/HourglassFull';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const NavBarBox = styled.div`
  width: 110px;
  height: 910px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.menu};
`;

const NavBar = () => {
  return (
    <NavBarBox>
      <NavButton>
        <AccessAlarmIcon />
        <span>자명종</span>
      </NavButton>
      <NavButton>
        <AvTimerIcon />
        <span>타이머</span>
      </NavButton>
      <NavButton>
        <HourglassFull />
        <span>스톱워치</span>
      </NavButton>
      <NavButton>
        <AccessTimeIcon />
        <span>시계</span>
      </NavButton>
    </NavBarBox>
  );
};

export default NavBar;
