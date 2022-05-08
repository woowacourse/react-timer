import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavLink = ({ children, to, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.string.isRequired,
};

const StyledLink = styled(Link)`
  font-size: 32px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  &.selected {
    color: rgba(255, 255, 255, 1);
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export default NavLink;
