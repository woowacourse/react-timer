import styled from 'styled-components';

export const TimerPage = styled.div`
  text-align: center;
`;

export const ClockSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  color: #292929;

  & > input {
    width: 40px;
    height: 34px;
    background: transparent;
    border: none;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #292929;
  }
`;

export const CustomTimerSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 23px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
`;

export const CompleteMessage = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #292929;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 260px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 50px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #292929;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 220px;
  top: 12px;
  z-index: -1;
`;
