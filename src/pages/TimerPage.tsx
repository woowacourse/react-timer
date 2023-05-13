import styled from 'styled-components';
import ControlButton from '../components/common/ControlButton';
import { ReactComponent as ClockIcon } from '../assets/icons/clock.svg';
import QuickTimerButton from '../components/common/QuickTimerButton';
import { useEffect, useState } from 'react';
import alarm from '../assets/alarms/digital-alarm.mp3';
import useModal from '../hooks/useModal';

const TimerPage = () => {
  const [alarmSound, setAlarmSound] = useState<HTMLAudioElement>(
    new Audio(alarm)
  );
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const { modalOpen, closeModal, openModal, Modal } = useModal(false);

  const playAlarmSound = () => {
    alarmSound.play();
  };

  const stopAlarmSound = () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  };

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (
            prevTime.hours === 0 &&
            prevTime.minutes === 0 &&
            prevTime.seconds === 0
          ) {
            setIsRunning(false);
            clearInterval(timer);
            playAlarmSound();
            openModal();
            return prevTime;
          }

          let seconds = prevTime.seconds;
          let minutes = prevTime.minutes;
          let hours = prevTime.hours;

          if (seconds === 0) {
            if (minutes === 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              minutes -= 1;
              seconds = 59;
            }
          } else {
            seconds -= 1;
          }

          return {
            hours,
            minutes,
            seconds,
          };
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setCurrentTime(time);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    closeModal();
    stopAlarmSound();
  };

  const handleRestart = () => {
    setTime(currentTime);
    setIsRunning(true);
    closeModal();
    stopAlarmSound();
  };

  const changeTime =
    (key: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (Number(e.target.value) < 0) return;
      setTime((prev) => ({ ...prev, [key]: Number(e.target.value) }));
    };

  return (
    <>
      <ClockWrapper>
        <ClockIcon />
        <Clock>
          {String(time.hours).padStart(2, '0')}:
          {String(time.minutes).padStart(2, '0')}:
          {String(time.seconds).padStart(2, '0')}
        </Clock>
      </ClockWrapper>
      <ButtonWrapper>
        <QuickTimerButton
          text='3'
          onClick={() => setTime({ hours: 0, minutes: 3, seconds: 0 })}
        />
        <QuickTimerButton
          text='5'
          onClick={() => setTime({ hours: 0, minutes: 5, seconds: 0 })}
        />
        <QuickTimerButton
          text='10'
          onClick={() => setTime({ hours: 0, minutes: 10, seconds: 0 })}
        />
      </ButtonWrapper>
      <InputWrapper>
        <TimeInput value={time.hours} onChange={changeTime('hours')}>
          {Array.from({ length: 100 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </TimeInput>
        시
        <TimeInput value={time.minutes} onChange={changeTime('minutes')}>
          {Array.from({ length: 60 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </TimeInput>
        분
        <TimeInput value={time.seconds} onChange={changeTime('seconds')}>
          {Array.from({ length: 60 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </TimeInput>
        초
      </InputWrapper>
      <ButtonWrapper>
        {isRunning ? (
          <>
            <ControlButton text='취소' onClick={handleReset} />
            <ControlButton text='일시정지' onClick={handlePause} />
          </>
        ) : (
          <>
            <ControlButton text='취소' onClick={handleReset} />
            <ControlButton text='시작' onClick={handleStart} />
          </>
        )}
      </ButtonWrapper>
      <Modal modalOpen={modalOpen}>
        <ModalContent>
          <p>타이머를 다시 시작할까요?</p>
          <ModalButtonWrapper>
            <ControlButton text='취소' onClick={handleReset} />
            <ControlButton text='확인' onClick={handleRestart} />
          </ModalButtonWrapper>
        </ModalContent>
      </Modal>
    </>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  width: 100%;
  height: 100%;

  color: #525252;
  font-size: 24px;
  font-weight: bold;
`;

const Clock = styled.span`
  position: absolute;

  font-size: 40px;
  font-family: 'DigitalClock';

  top: 190px;
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
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
`;

const TimeInput = styled.select`
  width: 100px;
  height: 40px;
  text-align: center;

  border: 3px solid var(--green-200);
  border-radius: 12px;
  color: #525252;
`;

export default TimerPage;
