import { useState } from 'react';
import styled from 'styled-components';

type Lap = {
  id: number;
  time: number;
};

type LapTableProps = {
  laps: Lap[];
};

const LapTable = ({ laps }: LapTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>순서</Th>
          <Th>구간기록</Th>
          <Th>전체시간</Th>
        </tr>
      </thead>
      <tbody>
        {laps.map((lap, index, array) => {
          const interval = index === 0 ? 0 : lap.time - array[index - 1]?.time;
          return (
            <tr key={lap.id}>
              <td>Lap {lap.id}</td>
              <td>
                {('0' + Math.floor((interval / 60000) % 60)).slice(-2)}:
                {('0' + Math.floor((interval / 1000) % 60)).slice(-2)}.
                {('0' + ((interval / 10) % 100)).slice(-2)}
              </td>
              <td>
                {('0' + Math.floor((lap.time / 60000) % 60)).slice(-2)}:
                {('0' + Math.floor((lap.time / 1000) % 60)).slice(-2)}.
                {('0' + ((lap.time / 10) % 100)).slice(-2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  padding: 0px 34px;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export default LapTable;
