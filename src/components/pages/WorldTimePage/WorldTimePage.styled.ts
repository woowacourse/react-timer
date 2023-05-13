import styled from 'styled-components';
import { ClockSection as TimerClock } from '../TimerPage/TimerPage.styled';

export const WorldTimePage = styled.div`
  padding: 0 48px;
`;

export const ClockSection = styled(TimerClock)``;

export const Clock = styled.img`
  width: 200px;
  height: 200px;
`;

export const Current = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CurrentLocation = styled.div`
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #0d0d0d;
`;

export const CurrentDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CurrentTime = styled.div`
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  color: #0d0d0d;
`;

export const CurrentDate = styled.div`
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #8b8987;
`;

export const WorldTimeSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 18px;
  margin-top: 28px;
`;

export const WorldTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 88px;
  padding: 0 14px;
  background: rgba(199, 191, 191, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Location = styled.div`
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 25px;
  line-height: 34px;
  color: #0d0d0d;
`;

export const TimeDiff = styled.div`
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #8b8987;
`;

export const Time = styled.div`
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #292929;
`;
