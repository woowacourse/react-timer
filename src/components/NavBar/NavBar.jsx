import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const NavBar = ({ children, ...props }) => {
  return <StyledNav {...props}>{children}</StyledNav>;
};

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export default NavBar;
