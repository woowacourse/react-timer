import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const CorpAddress = ({ children }) => {
  return <StyledAddress>{children}</StyledAddress>;
};

CorpAddress.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const StyledAddress = styled.address`
  font-size: 10px;
  font-weight: 300;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.woowawhite};
`;

export default CorpAddress;
