import styled from 'styled-components';

const NavButtonBox = styled.button`
  width: 110px;
  height: 110px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border: none;
  background: transparent;
  color: white;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.navButtonHover};
    color: black;
  }
`;

const NavButton = ({ children }) => {
  return <NavButtonBox>{children}</NavButtonBox>;
};

export default NavButton;
