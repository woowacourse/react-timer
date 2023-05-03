import styled from 'styled-components';
import NavIcon from './NavIcon';

const NavBar = () => {
  return (
    <Container>
      <NavIcon title='세계시계'></NavIcon>
      <NavIcon title='스톱워치'></NavIcon>
      <NavIcon title='타이머'></NavIcon>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--green-300);
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export default NavBar;
