import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TIME_ZONE } from './WorldDigtalClock';

type DigtalClockProps = {
  country: 'Tokyo' | 'Toronto' | 'London' | 'Seoul';
  showDate: boolean;
};

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DigitalClock = ({ country, showDate }: DigtalClockProps) => {
  const [time, setTime] = useState<Date>(new Date());
  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: TIME_ZONE[country],
    hourCycle: 'h12',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <Clock showDate={showDate}>{formattedTime}</Clock>
      {showDate && (
        <DateBlock>{`${time.getFullYear()}/${
          time.getMonth() + 1
        }/${time.getDate()}/${daysOfWeek[time.getDay()].slice(
          0,
          3
        )}`}</DateBlock>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Clock = styled.div<{ showDate: boolean }>`
  font-size: ${({ showDate }) => (showDate ? '42px' : '24px')};
  font-family: 'Digital Numbers Regular !important';
`;

const DateBlock = styled.div`
  color: #ff003d;
`;

export default DigitalClock;
