import { formatTime } from '../../utils/formatTime';
import Button from '../Button/Button';

export interface CustomTimerProps {
  customTime: number;
  updateTime: (time: number) => void;
}

const CustomTimer = ({ customTime, updateTime }: CustomTimerProps) => {
  return (
    <>
      <Button size="medium" onClick={() => updateTime(customTime)}>
        <span>{formatTime(customTime)}</span>
      </Button>
    </>
  );
};

export default CustomTimer;
