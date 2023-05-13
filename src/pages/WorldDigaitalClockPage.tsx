import WorldDigtalClock from '../components/WorldDigtalClock';
import { ReactComponent as WorldMap } from '../assets/world-map.svg';
import styled from 'styled-components';
import DigitalClock from '../components/DigitalClock';

const WorldDigaitalClockPage = () => {
  return (
    <>
      <Wrapper>
        <WorldMap width='90%' />
      </Wrapper>
      <DigitalClock country='Seoul' showDate={true} />
      <WorldDigitalClockWrapper>
        <WorldDigtalClock country='Tokyo' />
        <WorldDigtalClock country='London' />
        <WorldDigtalClock country='Toronto' />
      </WorldDigitalClockWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  padding: 24px 0px;
`;

const WorldDigitalClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 36px 0px;
`;
export default WorldDigaitalClockPage;
