import { TimeInfo } from '../types/types';

export const getTimeGapFromUTCOffset = (standardTime: TimeInfo, targetTime: TimeInfo) => {
  const offset = standardTime.UTC_OFFSET - targetTime.UTC_OFFSET;
  const prefix = offset > 0 ? '+' : '';

  return `${prefix}${offset}`;
};
