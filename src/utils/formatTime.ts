export const formatTime = (second: number) => {
  const minute: number = Math.floor(second / 60);
  const hour: number = Math.floor(minute / 60);
  const minuteStr: string = String(minute % 60).padStart(2, '0');
  const secondStr: string = String(second % 60).padStart(2, '0');
  const hourStr: string = String(hour).padStart(2, '0');

  return hour === 0
    ? `${minuteStr}:${secondStr}`
    : `${hourStr}:${minuteStr}:${secondStr}`;
};
