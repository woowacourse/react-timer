import styled from 'styled-components';
import { TriggerButtonSection } from '../../TriggerButtonSection/TriggerButtonSection.styled';

export const TimerPage = styled.div``;

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
