import './index.css';

const TimerPage = () => {
  return (
    <div className="timer-page">
      <p className="time-display">00:00:00</p>
      <div className="select-min-container">
        <button type="button" className="select-min-button">
          1분
        </button>
        <button type="button" className="select-min-button">
          3분
        </button>
        <button type="button" className="select-min-button">
          10분
        </button>
        <button type="button" className="select-min-button">
          15분
        </button>
      </div>
      <button type="button" className="select-user-button">
        직접 추가
      </button>
      <button type="button" className="start-button">
        시 작
      </button>
    </div>
  );
};

export default TimerPage;
