import { useRef, useEffect, useReducer } from 'react';
import styled from 'styled-components';

import { TimerButton, SmallTimerbutton } from '../components/TimerButton';
import TimerPannel from '../components/TimerPannel';
import Modal from '../components/Modal';
import basicAlarm from '../asset/basicAlarm.mp3';

import useTimer from '../hooks/useTimer';

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
  const {
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
  } = useTimer();
  const audioRef = useRef(null);
  const [isOpen, toggleModal] = useReducer((modalOpen) => {
    modalOpen && audioRef.current.pause();
    return !modalOpen;
  }, false);

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
  }, [time, isRunning, setIsRunning, timerId]);

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
        <SmallTimerbutton color='black' onClick={onClickQuickTimeAddButton}>
          + 1분
        </SmallTimerbutton>
        <SmallTimerbutton color='black' onClick={onClickQuickTimeAddButton}>
          + 5분
        </SmallTimerbutton>
        <SmallTimerbutton color='black' onClick={onClickQuickTimeAddButton}>
          + 10분
        </SmallTimerbutton>
        <SmallTimerbutton color='black' onClick={onClickQuickTimeAddButton}>
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
