import React, { useState } from "react";
import styled from "styled-components";

const dropdownIcon = (
  <svg
    width="1rem"
    height="1rem"
    style={{ marginLeft: "0.5rem", float: "right" }}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const DropdownMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Timeover");

  const toggle = () => {
    setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened);
    console.log(isMenuOpened);
  };

  const select = (option) => {
    setSelectedOption(option);
  };

  return (
    <StyledDropdown>
      <StyledDropdownButton
        type="button"
        onClick={() => {
          toggle();
        }}
      >
        {selectedOption} {dropdownIcon}
      </StyledDropdownButton>
      <StyledDropdownMenu className={isMenuOpened ? "opened" : ""}>
        <ul>
          <li>
            <button
              className={selectedOption === "Timeover" ? "selected" : ""}
              onClick={() => {
                select("Timeover");
              }}
            >
              Timeover
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                select("Homecoming");
              }}
              className={selectedOption === "Homecoming" ? "selected" : ""}
            >
              Homecoming
            </button>
          </li>
          <li>
            <button
              className={selectedOption === "Jam Jam" ? "selected" : ""}
              onClick={() => {
                select("Jam Jam");
              }}
            >
              Jam Jam
            </button>
          </li>
          <li>
            <button
              className={selectedOption === "Lalala" ? "selected" : ""}
              onClick={() => {
                select("Lalala");
              }}
            >
              Lalala
            </button>
          </li>
        </ul>
      </StyledDropdownMenu>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  width: 200px;
`;

const StyledDropdownButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.woowagreen};
  background: ${({ theme }) => theme.woowawhite};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledDropdownMenu = styled.div`
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  visibility: hidden;
  background: white;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-color: rgb(243 244 246);
  border-radius: 0.25rem;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));

  &.opened {
    visibility: visible;
  }

  ul {
    width: inherit;
    padding: 0.25rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(55 65 81);
  }

  button {
    display: block;
    padding: 0.5rem 1rem;
    width: 100%;
    cursor: pointer;
    background: transparent;

    :hover {
      background-color: rgb(229 231 235);
    }
  }
`;

export default DropdownMenu;
