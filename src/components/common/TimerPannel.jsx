import styled from 'styled-components';
import DigitalFont from '../../styles/font/digital-7.ttf';

const TimerPanelBox = styled.div`
  width: 200px;
  height: 80px;
`;

const TimerPanelText = styled.div`
  @font-face {
    font-family: 'digital-7';
    src: url(${DigitalFont});
  }
  font-family: 'digital-7';
  font-weight: 320;
  font-size: 90px;
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
