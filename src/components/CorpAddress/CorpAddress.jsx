import React from "react";
import styled from "styled-components";

const CorpAddress = ({ children }) => {
  return <StyledAddress>{children}</StyledAddress>;
};

const StyledAddress = styled.address`
  font-size: 10px;
  font-weight: 300;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.woowawhite};
`;

export default CorpAddress;
