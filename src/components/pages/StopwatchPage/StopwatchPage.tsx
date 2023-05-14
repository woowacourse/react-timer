import { useCallback, useEffect, useRef, useState } from 'react';
import * as Styled from './StopwatchPage.styled';
import TriggerButtonSection from '../../TriggerButtonSection/TriggerButtonSection';

const StopwatchPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapList, setLapList] = useState<string[]>([]);
  const startTimeRef = useRef(0);
  const frameRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null,
  );

  const handleAnimationFrame = useCallback(() => {
    const currentTime = Date.now();
    if (startTimeRef.current) setTime(currentTime - startTimeRef.current);
    frameRef.current = requestAnimationFrame(handleAnimationFrame);
  }, []);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - time;
      frameRef.current = requestAnimationFrame(handleAnimationFrame);
    } else {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isRunning, handleAnimationFrame, time]);

  const formatTime = (time: number) => {
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor(time / 1000);
    const milliseconds = time % 1000;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  const handleLap = () => {
    setLapList((prev) => [...prev, `${formatTime(time)}`]);
  };

  const handleRunning = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setLapList([]);
  };

  return (
    <Styled.StopwatchPage>
      <Styled.Stopwatch>{formatTime(time)}</Styled.Stopwatch>
      <TriggerButtonSection
        onReset={handleReset}
        onRunning={handleRunning}
        isRunning={isRunning}
        onLap={handleLap}
        isStopwatch
      />
      <Styled.LapList>
        {lapList.map((lap, index) => (
          <Styled.LapItem key={index}>
            <p>랩 {index + 1}</p>
            <time>{lap}</time>
          </Styled.LapItem>
        ))}
      </Styled.LapList>
    </Styled.StopwatchPage>
  );
};
export default StopwatchPage;
