import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimerScreen = ({ remainTime: { hour, minute, second } }) => {
  const hourText = hour.toString().padStart(2, "0");
  const minuteText = minute.toString().padStart(2, "0");
  const secondText = second.toString().padStart(2, "0");
  return (
    <StyledTimerScreen>
      <div className="blank-space">
        <p>
          {hourText}:{minuteText}:{secondText}
        </p>
      </div>
    </StyledTimerScreen>
  );
};

TimerScreen.propTypes = {
  remainTime: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number,
    second: PropTypes.number,
  }).isRequired,
};

const StyledTimerScreen = styled.div`
  width: 455px;
  height: 455px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 400;
  color: ${(props) => props.theme.woowawhite};
  background-color: ${(props) => props.theme.woowawhite};

  .blank-space {
    background-color: transparent;
  }
`;

export default TimerScreen;
