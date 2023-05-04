import { useState } from 'react';
import styled from 'styled-components';

const LapTable = () => {
  const [laps, setLaps] = useState([]);
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
        {laps.map((lapTime, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{new Date(lapTime).toISOString().slice(14, -1)}</td>
            <td>{new Date(lapTime).toISOString().slice(14, -1)}</td>
          </tr>
        ))}
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
