import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import TimerButton from './components/common/TimerButton';
import TimerPannel from './components/common/TimerPannel';

import Header from './components/common/Header';
import NavBar from './components/common/NavBar';

const ContentContainer = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const TimerButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef();
  const initialTime = useRef(0);

  const startTimer = () => {
    setIsRunning(true);
    timerId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
  };

  const modifyTimer = () => {
    const newMinute = prompt('몇 분를 셀 것인지 입력해주세요');
    const newSecond = prompt('몇 초를 셀 것인지 입력해주세요');

    const calcSecond = Number(newMinute) * 60 + Number(newSecond);
    setTime(calcSecond);

    initialTime.current = calcSecond;
  };

  const resetTimer = () => {
    setTime(initialTime.current);
    clearInterval(timerId.current);
    setIsRunning(false);
  };

  const minute = String(parseInt(time / 60)).padStart(2, '0');
  const second = String(time % 60).padStart(2, '0');

  useEffect(() => {
    if (isRunning && time === 0) {
      alert('타이머가 종료되었습니다.');
      clearInterval(timerId.current);
      setIsRunning(false);
    }
  }, [time, isRunning]);

  return (
    <div>
      <Header />
      <ContentContainer>
        <NavBar />
        <ContentBox>
          <TimerPannel>
            {minute} : {second}
          </TimerPannel>
          <TimerButtonBox>
            <TimerButton color='lokbaRed' onClick={modifyTimer}>
              타이머 수정
            </TimerButton>
            <TimerButton color='smingBlue' onClick={resetTimer}>
              재설정
            </TimerButton>
            {isRunning ? (
              <TimerButton color='sophiaPink' onClick={stopTimer}>
                중지
              </TimerButton>
            ) : (
              <TimerButton color='binyeoGreen' onClick={startTimer}>
                시작
              </TimerButton>
            )}
          </TimerButtonBox>
        </ContentBox>
      </ContentContainer>
    </div>
  );
};

export default App;
