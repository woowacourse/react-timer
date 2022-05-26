import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  font-size: 36px;
  font-weight: 400;
  line-height: 52px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.woowawhite};
  color: ${({ theme }) => theme.woowablack};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
