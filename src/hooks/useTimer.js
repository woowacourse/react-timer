import moment from "moment";
import { useState, useRef, useEffect, useCallback } from "react";

const useTimer = () => {
  const requestAnimationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [startDateMilliSeconds, setStartDateMilliSeconds] = useState(
    Date.now()
  );
  const [elapsed, setElapsed] = useState(0);
  const [lastElapsed, setLastElapsed] = useState(0);

  const getElapsed = useCallback(() => {
    const currentDateMilliSeconds = Date.now();
    const elapsedMilliSeconds =
      lastElapsed + currentDateMilliSeconds - startDateMilliSeconds;

    setElapsed(elapsedMilliSeconds);
  }, [lastElapsed, startDateMilliSeconds]);

  useEffect(() => {
    if (!isPaused) {
      requestAnimationRef.current = requestAnimationFrame(getElapsed);
    }

    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  }, [requestAnimationRef.current, isPaused, getElapsed]);

  return {
    elapsed: moment.duration(elapsed),
    isPaused,
    start: () => {
      if (!isPaused) return;

      setIsPaused(false);
      setStartDateMilliSeconds(Date.now());
    },
    pause: () => {
      if (isPaused) return;

      setIsPaused(true);
      cancelAnimationFrame(requestAnimationRef.current);
      setLastElapsed(elapsed);
    },
    stop: () => {
      setIsPaused(true);
      cancelAnimationFrame(requestAnimationRef.current);
      setElapsed(0);
      setLastElapsed(0);
    },
  };
};

export default useTimer;
