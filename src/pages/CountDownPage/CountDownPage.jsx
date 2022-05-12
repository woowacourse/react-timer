import React, { useState } from "react";
import styled from "styled-components";
import TimerScreen from "../../components/TimerScreen/TimerScreen";
import TimerControlButton from "../../components/TimerControlButton/TimerControlButton";
import Button from "../../components/Button/Button";
import SmallButton from "./../../components/SmallButton/SmallButton";
import Input from "./../../components/Input/Input";

const TimeQuickSlotNumber = [3, 5, 10, 15, 20, 30];
const initialTime = {
  hour: 0,
  minute: 0,
  second: 0,
};

const CountDownPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [configureTime, setConfigureTime] = useState(initialTime);

  const [countDownTime, setCountDownTime] = useState(initialTime);

  const togglePlaying = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <StyledPageContainer>
      <TimerContainer>
        <TimerScreen countDownTime={{ ...countDownTime }} />
        <div>
          <TimerControlButton
            controlType={isPlaying ? "pause" : "play"}
            onClick={() => {
              togglePlaying();
            }}
          />
          <TimerControlButton controlType="stop" />
        </div>
      </TimerContainer>
      <ConfigurationContainer>
        <TimeQuickSlotGrid>
          {TimeQuickSlotNumber.map((number, index) => (
            <SmallButton
              key={index}
              onClick={() =>
                setConfigureTime({ hour: 0, minute: number, second: 0 })
              }
            >
              {number}
            </SmallButton>
          ))}
        </TimeQuickSlotGrid>
        <TimeSettingContainer>
          <label>
            <Input
              type="number"
              min={0}
              max={100}
              value={configureTime.hour}
              onChange={({ target }) => {
                if (Number.isNaN(Number(target.value))) return;
                setConfigureTime((prevState) => ({
                  ...prevState,
                  hour: target.value,
                }));
              }}
            />
            시
          </label>
          <label>
            <Input
              type="number"
              min={0}
              max={60}
              value={configureTime.minute}
              onChange={({ target }) => {
                if (Number.isNaN(Number(target.value))) return;
                setConfigureTime((prevState) => ({
                  ...prevState,
                  minute: target.value,
                }));
              }}
            />
            분
          </label>
          <label>
            <Input
              type="number"
              min={0}
              max={60}
              value={configureTime.second}
              onChange={({ target }) => {
                if (Number.isNaN(Number(target.value))) return;
                setConfigureTime((prevState) => ({
                  ...prevState,
                  second: target.value,
                }));
              }}
            />
            초
          </label>
        </TimeSettingContainer>
        <div>
          <Button
            onClick={() => {
              setCountDownTime({ ...configureTime });
            }}
          >
            설정
          </Button>
        </div>
      </ConfigurationContainer>
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const TimerContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ConfigurationContainer = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  font-size: 2rem;
  color: ${({ theme }) => theme.woowawhite};

  input {
    box-sizing: border-box;
    width: 4.125rem;
    height: 3rem;
    margin-right: 0.725rem;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const TimeQuickSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const TimeSettingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default CountDownPage;
