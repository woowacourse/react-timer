import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

import useCountdown from "./../../hooks/useCountdown";

import TimerScreen from "../../components/TimerScreen/TimerScreen";
import TimerControlButton from "../../components/TimerControlButton/TimerControlButton";
import Button from "../../components/Button/Button";
import SmallButton from "./../../components/SmallButton/SmallButton";
import Input from "./../../components/Input/Input";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

const TimeQuickSlotNumber = [3, 5, 10, 15, 20, 30];

const initialConfiguration = {
  targetTime: moment.duration({
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),
  alarmSound: "Jam Jam",
};

const initialFormState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  alarmSound: "Jam Jam",
};

const CountDownPage = () => {
  const onFinish = () => {
    alert("땡땡땡");
  };

  const { remain, isPaused, start, pause, stop, setConfiguration } =
    useCountdown({ initialConfiguration, onFinish });

  const [formState, setFormState] = useState(initialFormState);

  return (
    <StyledPageContainer>
      <TimerContainer>
        <TimerScreen
          hours={remain.hours()}
          minutes={remain.minutes()}
          seconds={remain.seconds()}
        />
        <div>
          <TimerControlButton
            controlType={isPaused ? "play" : "pause"}
            onClick={() => {
              isPaused ? start() : pause();
            }}
          />
          <TimerControlButton
            controlType="stop"
            onClick={() => {
              stop();
            }}
          />
        </div>
      </TimerContainer>
      <ConfigurationForm
        onSubmit={(e) => {
          e.preventDefault();
          stop();
          setConfiguration({
            targetTime: moment.duration({
              hours: formState.hours,
              minutes: formState.minutes,
              seconds: formState.seconds,
            }),
            alarmSound: formState.alarmSound,
          });
        }}
      >
        <TimeQuickSlotGrid>
          {TimeQuickSlotNumber.map((number, index) => (
            <SmallButton
              type="button"
              key={index}
              onClick={() =>
                setFormState((prevFormState) => ({
                  ...prevFormState,
                  hours: 0,
                  minutes: number,
                  seconds: 0,
                }))
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
              max={23}
              step={1}
              required={true}
              value={formState.hours}
              onChange={({ target }) => {
                if (Number.isNaN(Number(target.value))) return;

                setFormState((prevState) => ({
                  ...prevState,
                  hours: target.value,
                }));
              }}
            />
            시
          </label>
          <label>
            <Input
              type="number"
              min={0}
              max={59}
              step={1}
              required={true}
              value={formState.minutes}
              onChange={({ target }) => {
                if (Number.isNaN(Number(target.value))) return;

                setFormState((prevState) => ({
                  ...prevState,
                  minutes: target.value,
                }));
              }}
            />
            분
          </label>
          <label>
            <Input
              type="number"
              min={0}
              max={59}
              step={1}
              required={true}
              value={formState.seconds}
              onChange={({ target }) => {
                if (Number.isNaN(Number(target.value))) return;

                setFormState((prevState) => ({
                  ...prevState,
                  seconds: target.value,
                }));
              }}
            />
            초
          </label>
        </TimeSettingContainer>
        <DropdownMenu />
        <Button type="submit">설정</Button>
      </ConfigurationForm>
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

const ConfigurationForm = styled.form`
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
