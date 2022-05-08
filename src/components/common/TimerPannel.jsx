import styled from 'styled-components';

const TimerPanelBox = styled.div`
  width: 100%;
  height: 80px;

  text-align: center;
`;

const TimerPanelText = styled.div`
  font-family: 'digital';
  font-weight: 320;
  font-size: 140px;
  color: ${({ theme }) => theme.colors.clock};
  letter-spacing: -10%;
`;

const TimerPannel = ({ children }) => {
  return (
    <TimerPanelBox>
      <TimerPanelText>{children}</TimerPanelText>
    </TimerPanelBox>
  );
};

export default TimerPannel;
