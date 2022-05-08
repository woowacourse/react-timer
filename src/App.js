import TimerButton from './components/common/TimerButton';
import TimerPannel from './components/common/TimerPannel';

const App = () => {
  return (
    <div>
      <TimerButton color='lokbaRed'>타이머 수정</TimerButton>
      <TimerButton color='smingBlue'>타이머 수정</TimerButton>
      <TimerButton color='binyeoGreen'>타이머 수정</TimerButton>
      <TimerPannel>24:45</TimerPannel>
    </div>
  );
};

export default App;
