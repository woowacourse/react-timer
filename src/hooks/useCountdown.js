import { useState, useEffect } from "react";
import moment from "moment";
import useTimer from "./useTimer";

const useCountdown = ({ initialConfiguration, onFinish }) => {
  const [configuration, setConfiguration] = useState(initialConfiguration);
  const { elapsed, isPaused, start, pause, stop } = useTimer();

  const remain = moment.duration(configuration.targetTime - elapsed);
  const remainAsMilliseconds = remain.asMilliseconds();

  useEffect(() => {
    if (!isPaused && remainAsMilliseconds <= 0) {
      stop();
      onFinish();
    }
  }, [isPaused, remainAsMilliseconds, stop, onFinish]);

  return {
    remain,
    isPaused,
    start: () => {
      if (remainAsMilliseconds > 0) {
        start();
      }
    },
    pause: () => {
      if (remainAsMilliseconds > 0) {
        pause();
      }
    },
    stop,
    setConfiguration,
  };
};

export default useCountdown;
