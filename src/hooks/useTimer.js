import { useState, useRef, useEffect } from "react";
import { differenceInMilliseconds, sub } from "date-fns";

const useTimer = () => {
  const startDate = useRef(new Date());
  const [elapsed, setElapsed] = useState(0);
  const requestAnimationRef = useRef(null);

  const getElapsed = () => {
    const currentDate = new Date();
    const elapseMilliseconds = differenceInMilliseconds(
      currentDate,
      startDate.current
    );

    // const elapsedSeconds = Math.floor(elapseMilliseconds / 1000);
    // const elapsedMinutes = Math.floor(elapseMilliseconds / 1000 / 60);
    // const elapsedHours = Math.floor(elapseMilliseconds / 1000 / 60 / 60);
    setElapsed(elapseMilliseconds);
  };

  useEffect(() => {
    requestAnimationRef.current = requestAnimationFrame(getElapsed);

    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  });

  return {
    elapsed,
    start: () => {
      startDate.current = new Date();
    },
    pause: () => {
      cancelAnimationFrame(requestAnimationRef.current);
    },
    stop: () => {
      cancelAnimationFrame(requestAnimationRef.current);
    },
  };
};

export default useTimer;
