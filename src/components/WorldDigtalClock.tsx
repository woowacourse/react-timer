import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HOUR_GAP = {
  Tokyo: '+0H',
  Toronto: '-13H',
  London: '-8H',
};

const TIME_ZONE = {
  Tokyo: 'Asia/Tokyo',
  Toronto: 'America/Toronto',
  London: 'Europe/London',
};

type WorldDigtalClockProps = {
  country: 'Tokyo' | 'Toronto' | 'London';
};

const WorldDigtalClock = ({ country }: WorldDigtalClockProps) => {
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
    <Container>
      <Country>
        <h3>{country}</h3>
        <div>{HOUR_GAP[country]}</div>
      </Country>
      <Clock>{formattedTime}</Clock>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Country = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Clock = styled.div`
  font-size: 24px;
`;

export default WorldDigtalClock;
