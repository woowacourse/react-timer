import styled from 'styled-components';

export const StopwatchPage = styled.div`
  text-align: center;
  padding: 90px 0 50px;
`;

export const Stopwatch = styled.time`
  display: block;
  margin-bottom: 70px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 77px;
`;

export const LapList = styled.ul`
  margin-top: 16px;
  padding: 0 20px;
  overflow: scroll;
`;

export const LapItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #333333;
  padding: 10px 0;
  font-size: 20px;
`;
