import { useState, useRef, useEffect, useReducer } from 'react';
import styled from 'styled-components';

import { TimerButton, SmallTimerbutton } from '../components/TimerButton';
import TimerPannel from '../components/TimerPannel';
import Modal from '../components/Modal';
import basicAlarm from '../asset/basicAlarm.mp3';

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

const ModalMessage = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
`;

const TimerPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef();
  const initialTime = useRef(0);
  const audioRef = useRef();

  const [isOpen, toggleModal] = useReducer((modalOpen) => {
    modalOpen && audioRef.current.pause();
    return !modalOpen;
  }, false);

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

  const onClickRestart = () => {
    toggleModal();
    resetTimer();
    startTimer();
  };

  const onClickQuickTimeAddButton = ({ target }) => {
    const { textContent } = target;
    const newMinute = textContent.replace(/[^0-9]/g, '');
    const calcSecond = newMinute * 60;

    setTime((prev) => {
      prev += calcSecond;
      initialTime.current = prev;
      return prev;
    });
  };

  const minute = String(parseInt(time / 60)).padStart(2, '0');
  const second = String(time % 60).padStart(2, '0');

  useEffect(() => {
    audioRef.current = new Audio(basicAlarm);
    audioRef.current.volume = 0.2;
  }, []);

  useEffect(() => {
    if (isRunning && time === 0) {
      audioRef.current.play();
      toggleModal();
      clearInterval(timerId.current);
      setIsRunning(false);
    }
  }, [time, isRunning]);

  return (
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
          <TimerButton color='binyeoGreen' onClick={startTimer} disabled={time ? false : true}>
            시작
          </TimerButton>
        )}
      </TimerButtonBox>
      <TimerButtonBox>
        <SmallTimerbutton color='binyeoGreen' onClick={onClickQuickTimeAddButton}>
          + 1분
        </SmallTimerbutton>
        <SmallTimerbutton color='binyeoGreen' onClick={onClickQuickTimeAddButton}>
          + 5분
        </SmallTimerbutton>
        <SmallTimerbutton color='binyeoGreen' onClick={onClickQuickTimeAddButton}>
          + 10분
        </SmallTimerbutton>
        <SmallTimerbutton color='binyeoGreen' onClick={onClickQuickTimeAddButton}>
          + 15분
        </SmallTimerbutton>
      </TimerButtonBox>
      {isOpen && (
        <Modal toggleModal={toggleModal}>
          <ModalMessage>
            타이머가 종료되었습니다. <br />
            <strong>재시작하시겠습니까?</strong>
          </ModalMessage>
          <TimerButtonBox>
            <TimerButton color='binyeoGreen' type='button' onClick={onClickRestart}>
              Restart
            </TimerButton>
            <TimerButton color='lokbaRed' type='button' onClick={toggleModal}>
              Stop
            </TimerButton>
          </TimerButtonBox>
        </Modal>
      )}
    </ContentBox>
  );
};

export default TimerPage;
