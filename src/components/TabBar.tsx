import worldTimeButtonImage from '../asset/world_time.png';
import timerButtonImage from '../asset/timer.png';
import stopWatchButtonImage from '../asset/stop_watch.png';

const TabBar = () => {
  return (
    <div>
      <button>
        <img src={worldTimeButtonImage} alt="world-time-button" />
      </button>
      <button>
        <img src={timerButtonImage} alt="timer-button" />
      </button>
      <button>
        <img src={stopWatchButtonImage} alt="stop-watch-button" />
      </button>
    </div>
  );
};

export default TabBar;
