import { useCallback, useEffect, useRef, useState } from 'react';
import * as Styled from './TimerPage.styled';
import TriggerButtonSection from '../../TriggerButtonSection/TriggerButtonSection';
import CustomTimer from '../../CustomTimer/CustomTimer';
import Button from '../../Button/Button';
import { useModal } from '../../Modal/useModal';
import { Modal } from '../../Modal/Modal';
import analogSound from '../../../assets/sound/analog-alarm.mp3';
import digitalSound from '../../../assets/sound/digital-alarm.mp3';
import highToneSound from '../../../assets/sound/clock-high.mp3';
import lowToneSound from '../../../assets/sound/clock-low.mp3';

const soundOptions = [
  {
    label: '아날로그',
    value: analogSound,
  },
  {
    label: '디지털',
    value: digitalSound,
  },
  {
    label: '하이톤',
    value: highToneSound,
  },
  {
    label: '로우톤',
    value: lowToneSound,
  },
];

const TimerPage = () => {
  const [time, setTime] = useState(0);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [record, setRecord] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedSound, setSelectedSound] = useState('디지털');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateTime = (time: number) => {
    const second = time % 60;
    const minute = Math.floor(time / 60);
    const hours = Math.floor(minute / 60);

    setTime(time);
    setRecord(time);
    setHours(() => `${hours}`.padStart(2, '0'));
    setMinutes(() => `${minute}`.padStart(2, '0'));
    setSeconds(() => `${second}`.padStart(2, '0'));
  };

  const handleReset = () => {
    setTime(0);
    setRecord(0);
    setIsRunning(false);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const handleRunning = () => {
    if (time <= 0) {
      return;
    }

    setIsRunning((prev) => !prev);
  };

  const handleCancelButtonClick = () => {
    stopCompleteSound();
    closeModal();
    handleReset();
  };

  const stopCompleteSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const playCompleteSound = useCallback(() => {
    const soundOption =
      soundOptions.find((option) => option.label === selectedSound) ?? null;

    if (soundOption === null) return;

    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [selectedSound]);

  const getSoundSrc = () => {
    const soundOption =
      soundOptions.find((option) => option.label === selectedSound) ?? null;

    if (soundOption === null) return;

    return soundOption.value;
  };

  useEffect(() => {
    if (time > 0 && isRunning) {
      intervalId.current = setInterval(() => {
        const second = (time - 1) % 60;
        const minute = Math.floor((time - 1) / 60);
        const hours = Math.floor(minute / 60);

        setTime((prevTime) => {
          if (prevTime - 1 === 0) {
            openModal();
            playCompleteSound();
          }

          return prevTime - 1;
        });
        setHours(() => `${hours}`.padStart(2, '0'));
        setMinutes(() => `${minute}`.padStart(2, '0'));
        setSeconds(() => `${second}`.padStart(2, '0'));
      }, 1000);
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [time, isRunning, record, openModal, playCompleteSound]);

  return (
    <>
      <Styled.TimerPage>
        <Styled.ClockSection>
          <Styled.TimerBox>
            <input
              type="text"
              maxLength={2}
              placeholder="00"
              value={hours}
              onChange={(e) => {
                if (!/^\d*$/.test(e.target.value)) return;

                const num = Number(e.target.value);

                setTime((prev) => prev + num * 3600);
                setRecord((prev) => prev + num * 3600);
                setHours(e.target.value);
              }}
            />
            :
            <input
              type="text"
              maxLength={2}
              placeholder="00"
              value={minutes}
              onChange={(e) => {
                if (!/^\d*$/.test(e.target.value)) return;

                const num = Number(e.target.value);
                if (num > 59) return;

                setTime((prev) => prev + num * 60);
                setRecord((prev) => prev + num * 60);
                setMinutes(e.target.value);
              }}
            />
            :
            <input
              type="text"
              maxLength={2}
              placeholder="00"
              value={seconds}
              onChange={(e) => {
                if (!/^\d*$/.test(e.target.value)) return;

                const num = Number(e.target.value);
                if (num > 59) return;

                setTime((prev) => prev + num);
                setRecord((prev) => prev + num);
                setSeconds(e.target.value);
              }}
            />
          </Styled.TimerBox>
        </Styled.ClockSection>
        <TriggerButtonSection
          onReset={handleReset}
          onRunning={handleRunning}
          isRunning={isRunning}
        />
        <audio ref={audioRef} src={getSoundSrc()} />
        <Styled.SelectWrapper>
          <Styled.Select
            value={selectedSound}
            onChange={(e) => setSelectedSound(e.target.value)}
          >
            {soundOptions.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </Styled.Select>
          <Styled.IconWrapper>
            <svg
              fill="none"
              width="24"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </Styled.IconWrapper>
        </Styled.SelectWrapper>
        <Styled.CustomTimerSection>
          <CustomTimer customTime={180} updateTime={updateTime} />
          <CustomTimer customTime={300} updateTime={updateTime} />
          <CustomTimer customTime={600} updateTime={updateTime} />
          <CustomTimer customTime={900} updateTime={updateTime} />
          <CustomTimer customTime={1200} updateTime={updateTime} />
        </Styled.CustomTimerSection>
      </Styled.TimerPage>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} onCloseModal={handleCancelButtonClick}>
          <Styled.ModalContainer>
            <Styled.CompleteMessage>
              타이머를 다시 시작할까요?
            </Styled.CompleteMessage>
            <Styled.ButtonContainer>
              <Button
                onClick={() => {
                  stopCompleteSound();
                  closeModal();
                  updateTime(record);
                  handleRunning();
                }}
              >
                확인
              </Button>
              <Button onClick={handleCancelButtonClick}>취소</Button>
            </Styled.ButtonContainer>
          </Styled.ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default TimerPage;
