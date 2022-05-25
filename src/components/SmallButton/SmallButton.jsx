import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SmallButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

SmallButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 115px;
  height: 48px;
  padding: 4px;

  font-size: 32px;
  font-weight: 400;

  border: 1px solid ${({ theme }) => theme.woowalightgreen};
  border-radius: 4px;

  color: ${({ theme }) => theme.woowalightgreen};
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 1);
    color: ${({ theme }) => theme.woowagreen};
  }
`;

export default SmallButton;
