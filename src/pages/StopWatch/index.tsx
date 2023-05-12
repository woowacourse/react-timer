import { useEffect, useState } from 'react';
import './index.css';
import { numberDataChangeTwo, numberDataChangeMS } from '../../utils/numberTypeChange';

interface Time {
  hour: number;
  minute: number;
  second: number;
  ms: number;
}

type StopWatchStatus = 'INIT' | 'RUNNING' | 'STOP';

const getStartAndStopButtonStyledByStatus = (status: StopWatchStatus) => {
  let color = 'var(--primary-black)';
  switch (status) {
    case 'INIT':
      color = 'var(--primary-green)';
      break;
    case 'RUNNING':
      color = 'var(--primary-red)';
      break;
    case 'STOP':
      color = 'var(--primary-green)';
      break;
  }
  return { color };
};

const getStartAndStopButtonTextByStatus = (status: StopWatchStatus) => {
  switch (status) {
    case 'INIT':
      return '시작';
    case 'RUNNING':
      return '정지';
    case 'STOP':
      return '재시작';
  }
};

const getLapButtonStyledByStatus = (status: StopWatchStatus) => {
  const color = status === 'RUNNING' ? 'var(--primary-dark)' : 'var(--primary-gray)';
  return { color };
};

const getLapButtonTextByStatus = (status: StopWatchStatus) => {
  switch (status) {
    case 'INIT':
      return '랩';
    case 'RUNNING':
      return '랩';
    case 'STOP':
      return '리셋';
  }
};

const StopWatchPage = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState<StopWatchStatus>('INIT');
  const [laps, setLaps] = useState<Time[]>([]);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (status === 'RUNNING') {
      intervalId = setInterval(() => setTime(time + 1), 11);
    }
    return () => clearInterval(intervalId);
  }, [status, time]);

  const hour = Math.floor(time / 360000);
  const minute = Math.floor((time % 360000) / 6000);
  const second = Math.floor((time % 6000) / 100);
  const ms = time % 100;

  const handleStartAndStopButton = () => {
    switch (status) {
      case 'INIT':
        setStatus('RUNNING');
        break;
      case 'RUNNING':
        setStatus('STOP');
        break;
      case 'STOP':
        setStatus('RUNNING');
        break;
    }
  };

  const handleLapButton = () => {
    switch (status) {
      case 'INIT':
        break;
      case 'RUNNING':
        setLaps([...laps, { hour, minute, second, ms }]);
        break;
      case 'STOP':
        setTime(0);
        break;
    }
  };

  return (
    <div className="stop-watch-page">
      <section className="stop-watch-time-display">
        <div className="hh-mm-ss">{`${numberDataChangeTwo(hour)}:${numberDataChangeTwo(
          minute
        )}:${numberDataChangeTwo(second)}`}</div>
        <div className="ms">{numberDataChangeMS(ms)}</div>
      </section>
      <section className="stop-watch-button-container">
        <button
          type="button"
          className="stop-watch-start-button"
          onClick={handleStartAndStopButton}
          style={getStartAndStopButtonStyledByStatus(status)}
        >
          {getStartAndStopButtonTextByStatus(status)}
        </button>
        <button
          type="button"
          className="stop-watch-lap-button"
          onClick={handleLapButton}
          style={getLapButtonStyledByStatus(status)}
        >
          {getLapButtonTextByStatus(status)}
        </button>
      </section>
      <table className="lap-table">
        <thead>
          <tr className="lap-table-header">
            <th>랩</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {laps.map(({ hour, minute, second, ms }, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>
                <span className="lap-hh-mm-ss">{`${numberDataChangeTwo(hour)}:${numberDataChangeTwo(
                  minute
                )}:${numberDataChangeTwo(second)}`}</span>
                <span className="lap-ms">{numberDataChangeMS(ms)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StopWatchPage;
