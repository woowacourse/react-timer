import styled from '@emotion/styled';

import TimerButton from './components/common/TimerButton';
import TimerPannel from './components/common/TimerPannel';

import Header from './components/common/Header';
import NavBar from './components/common/NavBar';

const ContentContainer = styled.div`
  display: flex;
`;

const ContentBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const TimerButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const App = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <NavBar />
        <ContentBox>
          <TimerPannel>00:00</TimerPannel>
          <TimerButtonBox>
            <TimerButton color='lokbaRed'>타이머 수정</TimerButton>
            <TimerButton color='smingBlue'>재설정</TimerButton>
            <TimerButton color='binyeoGreen'>시작</TimerButton>
          </TimerButtonBox>
        </ContentBox>
      </ContentContainer>
    </div>
  );
};

export default App;
