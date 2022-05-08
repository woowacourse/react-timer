import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  padding: 4px;
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.woowagreen};
  background-color: ${(props) => props.theme.woowawhite};
  border: none;
  border-radius: 4px;
  text-align: center;

  &:focus {
    outline-color: ${(props) => props.theme.woowagreen};
  }

  &::placeholder {
    color: ${(props) => props.theme.placeholderColor};
  }
`;

export default Input;
