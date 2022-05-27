import { useState, useRef } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);
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
    const newMinute = prompt('몇 분을 셀 것인지 입력해주세요');
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

  return {
    time,
    timerId,
    startTimer,
    stopTimer,
    resetTimer,
    modifyTimer,
    isRunning,
    setTime,
    initialTime,
    setIsRunning,
  };
};

export default useTimer;
