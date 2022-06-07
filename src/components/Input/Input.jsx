import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  padding: 4px;
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.woowagreen};
  background-color: ${({ theme }) => theme.woowawhite};
  border: none;
  border-radius: 4px;
  text-align: center;

  &:focus {
    outline-color: ${({ theme }) => theme.woowagreen};
  }

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }
`;

export default Input;
