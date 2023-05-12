import { useEffect, useRef, useState } from 'react';
import DirectTimerAddModal from '../../components/DirectTimerAddModal';
import { numberDataChangeTwo } from '../../utils/numberTypeChange';
import alarmSource from '../../asset/alarm_sound.mp3';
import './index.css';

const TimerPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [secTime, setSecTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timerInterval = useRef<NodeJS.Timer>();
  const buttonHandler = (min: number) => {
    setSecTime((secTime) => secTime + min * 60);
  };

  useEffect(() => {
    if (isRunning) {
      timerInterval.current = setInterval(() => {
        if (secTime <= 0) {
          setIsRunning(false);
          audioRef.current && audioRef.current.play();
          window.confirm('시간이 다되었어요!');
          audioRef.current && audioRef.current.pause();
        } else {
          setSecTime(secTime - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval.current);
  }, [isRunning, secTime]);

  const second = secTime % 60;
  const min = Math.floor((secTime % 3600) / 60);
  const hour = Math.floor((secTime % 216000) / 3600);

  const handleStartButton = () => {
    if (secTime <= 0) {
      alert('시간을 설정하세요');
      return;
    }
    console.log(audioRef.current);
    setIsRunning(true);
  };

  const handleResetButton = () => {
    setSecTime(0);
    setIsRunning(false);
  };

  const handleStopButton = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer-page">
      <p className="time-display">{`${numberDataChangeTwo(hour)}:${numberDataChangeTwo(
        min
      )}:${numberDataChangeTwo(second)}`}</p>
      <div className="select-min-container">
        <button type="button" className="select-min-button" onClick={() => buttonHandler(1)}>
          1분
        </button>
        <button type="button" className="select-min-button" onClick={() => buttonHandler(3)}>
          3분
        </button>
        <button type="button" className="select-min-button" onClick={() => buttonHandler(10)}>
          10분
        </button>
        <button type="button" className="select-min-button" onClick={() => buttonHandler(15)}>
          15분
        </button>
      </div>
      <button
        type="button"
        className="select-user-button"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        직접 추가
      </button>
      {isRunning ? (
        <div className="button-box">
          <button className="reset-button" onClick={handleResetButton}>
            초기화
          </button>
          <button className="pause-button" onClick={handleStopButton}>
            일시정지
          </button>
        </div>
      ) : (
        <button type="button" className="start-button" onClick={handleStartButton}>
          시 작
        </button>
      )}
      {isModalOpen && <DirectTimerAddModal isOpenModal={setIsModalOpen} setTime={setSecTime} />}
      <audio src={alarmSource} typeof="audio/mp3" ref={audioRef} />
    </div>
  );
};

export default TimerPage;
