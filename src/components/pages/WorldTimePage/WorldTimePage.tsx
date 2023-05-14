import { useEffect, useRef, useState } from 'react';
import * as Styled from './WorldTimePage.styled';
import clockImage from '../../../assets/clock.png';

function getUTCTime(offset = 0): Date {
  const now = new Date();
  const targetLocaleOffset = offset * 60;
  const localOffset = now.getTimezoneOffset(); // 현재 지역의 UTC offset (분 단위)
  const utcTime = now.getTime() + localOffset * 60 * 1000; // UTC 기준 현재 시간 (밀리초 단위)

  return new Date(utcTime + targetLocaleOffset * 60 * 1000);
}

const WorldTimePage = () => {
  const [time, setTime] = useState(getUTCTime(9));
  const torontoTime = getUTCTime(-4);
  const londonTime = getUTCTime();
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(getUTCTime(9));
    }, 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [time]);

  const isSameDateWithSeoul = (currentLocaleDate: number) => {
    const seoulDate = time.getDate();

    return seoulDate === currentLocaleDate;
  };

  return (
    <Styled.WorldTimePage>
      <Styled.ClockSection>
        <Styled.Clock src={clockImage} />
      </Styled.ClockSection>
      <Styled.Current>
        <Styled.CurrentLocation>서울</Styled.CurrentLocation>
        <Styled.CurrentDetail>
          <Styled.CurrentTime>{time.toLocaleTimeString()}</Styled.CurrentTime>
          <Styled.CurrentDate>{time.toLocaleDateString()}</Styled.CurrentDate>
        </Styled.CurrentDetail>
      </Styled.Current>
      <Styled.WorldTimeSection>
        <Styled.WorldTime>
          <div>
            <Styled.Location>도쿄</Styled.Location>
            <Styled.TimeDiff>오늘, 0시간</Styled.TimeDiff>
          </div>
          <Styled.Time>{time.toLocaleTimeString()}</Styled.Time>
        </Styled.WorldTime>
        <Styled.WorldTime>
          <div>
            <Styled.Location>런던</Styled.Location>
            <Styled.TimeDiff>
              {isSameDateWithSeoul(londonTime.getDate()) ? '오늘' : '어제'},
              -8시간
            </Styled.TimeDiff>
          </div>
          <Styled.Time>{londonTime.toLocaleTimeString()}</Styled.Time>
        </Styled.WorldTime>
        <Styled.WorldTime>
          <div>
            <Styled.Location>토론토</Styled.Location>
            <Styled.TimeDiff>
              {isSameDateWithSeoul(torontoTime.getDate()) ? '오늘' : '어제'},
              -13시간
            </Styled.TimeDiff>
          </div>
          <Styled.Time>{torontoTime.toLocaleTimeString()}</Styled.Time>
        </Styled.WorldTime>
      </Styled.WorldTimeSection>
    </Styled.WorldTimePage>
  );
};

export default WorldTimePage;
