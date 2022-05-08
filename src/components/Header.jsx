import styled from 'styled-components';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Brightness6Icon from '@material-ui/icons/Brightness6';

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  background: ${({ theme }) => theme.colors.menu};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0px 30px;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  font-weight: 700;
  cursor: pointer;

  p:first-child {
    font-size: 30px;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 20px;

  svg {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTitle onClick={() => window.location.reload()}>
        <p>vClock.kr</p>
        <p>온라인 시계</p>
      </HeaderTitle>

      <IconBox>
        <Brightness6Icon />
        <SettingsOutlinedIcon />
      </IconBox>
    </HeaderStyle>
  );
};

export default Header;
