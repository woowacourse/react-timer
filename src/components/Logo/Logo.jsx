import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledTitle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
      woowatimer
    </StyledTitle>
  );
};

const StyledTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  vertical-align: middle;
  line-height: 58px;
  color: ${(props) => props.theme.woowawhite};

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export default Logo;
