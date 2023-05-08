import styled from 'styled-components';
import DigitalClock from './DigitalClock';

export const HOUR_GAP = {
  Tokyo: '+0H',
  Toronto: '-13H',
  London: '-8H',
};

export const TIME_ZONE = {
  Tokyo: 'Asia/Tokyo',
  Toronto: 'America/Toronto',
  London: 'Europe/London',
  Seoul: 'Asia/Seoul',
};

type WorldDigtalClockProps = {
  country: 'Tokyo' | 'Toronto' | 'London';
};

const WorldDigtalClock = ({ country }: WorldDigtalClockProps) => {
  return (
    <Container>
      <Country>
        <h3>{country}</h3>
        <div>{HOUR_GAP[country]}</div>
      </Country>
      <DigitalClock country={country} showDate={false} />
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

export default WorldDigtalClock;
