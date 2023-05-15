import Clock from 'react-live-clock';
import './LocalTime.css';
import { DEFAULT_LOCATION, TIME_ZONE } from '../utils/constant';
import { getTimeGapFromUTCOffset } from '../utils/util';

type LocalTimeProps = {
  location: string;
  needDate: boolean;
};

const LocalTime = ({ location, needDate }: LocalTimeProps) => {
  return (
    <div
      className="local-time-box"
      style={{ backgroundColor: `${needDate ? 'var(--primary-light)' : 'var(--sub-light)'}` }}
    >
      <div className="local-time-YYMMDD">
        {needDate && <Clock format={'YYYY년MM월DD일'} ticking={false} timezone={location} />}
      </div>
      <div className="blank-box"></div>
      <div className="local-time-HHMMSS">
        <div className="local-time-location">
          {!needDate && (
            <div className="local-time-gap">
              {getTimeGapFromUTCOffset(TIME_ZONE[DEFAULT_LOCATION], TIME_ZONE[location])}시간
            </div>
          )}
          <div>{TIME_ZONE[location].NAME}</div>
        </div>
        <div className="local-time-except-location">
          <Clock className="local-time-seconds" format={'a'} ticking={true} timezone={location} />
          <Clock format={'HH:mm'} ticking={true} timezone={location} />
          <span>:</span>
          <Clock className="local-time-seconds" format={'ss'} ticking={true} timezone={location} />
        </div>
      </div>
    </div>
  );
};

export default LocalTime;
