type Location = 'Asia/Seoul' | 'Asia/Tokyo' | 'Asia/Hong_Kong';
type TimeInfo = {
  NAME: string;
  UTC_OFFSET: number;
};
export const TIME_ZONE: Record<string, TimeInfo> = {
  'Asia/Seoul': {
    NAME: '서울',
    UTC_OFFSET: 9,
  },
  'Asia/Tokyo': {
    NAME: '도쿄',
    UTC_OFFSET: 9,
  },
  'Asia/Hong_Kong': {
    NAME: '홍콩',
    UTC_OFFSET: 8,
  },
};

export const DEFAULT_LOCATION = 'Asia/Seoul';
