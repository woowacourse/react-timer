import React from "react";
import styled from "styled-components";

const NavBar = ({ children, ...props }) => {
  return <StyledNav {...props}>{children}</StyledNav>;
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export default NavBar;
