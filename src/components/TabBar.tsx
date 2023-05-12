import worldTimeButtonImage from '../asset/world_time.png';
import timerButtonImage from '../asset/timer.png';
import stopWatchButtonImage from '../asset/stop_watch.png';
import './TabBar.css';
import { useNavigate } from 'react-router';

const TabBar = () => {
  const navigate = useNavigate();

  return (
    <div className="tab-bar">
      <button onClick={() => navigate('/')}>
        <img src={worldTimeButtonImage} alt="world-time-button" />
      </button>
      <button onClick={() => navigate('/timer')}>
        <img src={timerButtonImage} alt="timer-button" />
      </button>
      <button onClick={() => navigate('/stopwatch')}>
        <img src={stopWatchButtonImage} alt="stop-watch-button" />
      </button>
    </div>
  );
};

export default TabBar;
