import LapTable from '../components/LapTable';
import { ReactComponent as ClockIcon } from '../assets/icons/clock.svg';
import styled from 'styled-components';
import ControlButton from '../components/common/ControlButton';
import { useEffect, useState } from 'react';

type Lap = {
  id: number;
  time: number;
};

const StopWatchPage = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<Lap[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setStart(true);
    setTimer(setInterval(() => setTime((prevTime) => prevTime + 10), 10));
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setLaps([]);
    stopTimer();
  };

  const addLap = () => {
    setLaps((prevLaps) => [...prevLaps, { id: prevLaps.length + 1, time }]);
  };

  useEffect(() => {
    return () => stopTimer();
  }, []);

  return (
    <>
      <Wrapper>
        <ClockWrapper>
          <ClockIcon />
          <Clock>
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
            {('0' + ((time / 10) % 100)).slice(-2)}
          </Clock>
        </ClockWrapper>
        <ButtonWrapper>
          {start ? (
            <ControlButton text='초기화' onClick={addLap} />
          ) : (
            <ControlButton text='랩' onClick={resetTimer} />
          )}
          {start ? (
            <ControlButton text='정지' onClick={stopTimer} />
          ) : (
            <ControlButton text='시작' onClick={startTimer} />
          )}
        </ButtonWrapper>
        <LapTable laps={laps} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 0px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ClockWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  padding: 24px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding-bottom: 24px;
`;

const Clock = styled.span`
  position: absolute;

  font-size: 40px;
  font-family: 'DigitalClock';

  top: 190px;
`;

export default StopWatchPage;
