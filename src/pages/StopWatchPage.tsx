import LapTable from '../components/LapTable';
import { ReactComponent as ClockIcon } from '../assets/icons/clock.svg';
import styled from 'styled-components';
import ControlButton from '../components/common/ControlButton';

const StopWatchPage = () => {
  return (
    <>
      <ClockWrapper>
        <ClockIcon />
        <Clock>00:00.00</Clock>
      </ClockWrapper>
      <ButtonWrapper>
        <ControlButton text='랩' onClick={() => {}} />
        <ControlButton text='시작' onClick={() => {}} />
      </ButtonWrapper>
      <LapTable />
    </>
  );
};

const ClockWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  padding: 24px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding-bottom: 24px;
`;

const Clock = styled.span`
  position: absolute;

  font-size: 40px;
  font-family: 'DigitalClock';

  top: 190px;
`;

export default StopWatchPage;
