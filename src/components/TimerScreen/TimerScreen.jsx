import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimerScreen = React.memo(({ hours, minutes, seconds }) => {
  const hourText = hours.toString().padStart(2, "0");
  const minuteText = minutes.toString().padStart(2, "0");
  const secondText = seconds.toString().padStart(2, "0");

  return (
    <StyledTimerScreen>
      <div className="blank-space">
        <p>
          {hourText}:{minuteText}:{secondText}
        </p>
      </div>
    </StyledTimerScreen>
  );
});

TimerScreen.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
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
  /* background-color: ${(props) => props.theme.woowawhite}; */

  .blank-space {
    background-color: transparent;
  }
`;

export default TimerScreen;
