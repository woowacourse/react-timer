import Header from '../components/Header';
import NavBar from '../components/NavBar';
import WorldDigtalClock from '../components/WorldDigtalClock';
import { ReactComponent as WorldMap } from '../assets/world-map.svg';
import styled from 'styled-components';
import DigitalClock from '../components/DigitalClock';

const WorldDigaitalClockPage = () => {
  return (
    <>
      <Header title='세계시계' />
      <Wrapper>
        <WorldMap width='90%' />
      </Wrapper>
      <DigitalClock country='Seoul' showDate={true} />
      <WorldDigitalClockWrapper>
        <WorldDigtalClock country='Tokyo' />
        <WorldDigtalClock country='London' />
        <WorldDigtalClock country='Toronto' />
      </WorldDigitalClockWrapper>
      <NavBar />
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
