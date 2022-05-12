import React from "react";
import styled from "styled-components";

const StyledBlah = styled.div`
  position: relative;
  margin: auto;
  margin-top: 100px;
  height: 40px;
  width: 40px;
  text-align: center;

  .countdown-number {
    color: white;
    display: inline-block;
    line-height: 40px;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }

  svg circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: white;
    fill: none;
    animation: countdown 10s linear infinite forwards;
  }

  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
  }
`;

const RadialTimer = () => (
  <StyledBlah>
    <div className="countdown-number">10</div>
    <svg>
      <circle r="18" cx="20" cy="20"></circle>
    </svg>
  </StyledBlah>
);

export default RadialTimer;
