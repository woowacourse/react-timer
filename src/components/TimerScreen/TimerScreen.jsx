import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useTimer from "../../hooks/useTimer";

const TimerScreen = ({ countDownTime }) => {
  const [remainTime, setRemainTime] = useState(countDownTime);

  // const { elapsed } = useTimer();

  const hourText = remainTime.hour.toString().padStart(2, "0");
  const minuteText = remainTime.minute.toString().padStart(2, "0");
  const secondText = remainTime.second.toString().padStart(2, "0");

  // useEffect(() => {
  // console.log(elapsed);
  // }, [elapsed]);

  // const elapsedSeconds = Math.floor(elapsed / 1000);
  // const elapsedMinutes = Math.floor(elapsed / 1000 / 60);
  // const elapsedHours = Math.floor(elapsed / 1000 / 60 / 60);

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
  countDownTime: PropTypes.shape({
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
  /* background-color: ${(props) => props.theme.woowawhite}; */

  .blank-space {
    background-color: transparent;
  }
`;

export default TimerScreen;
