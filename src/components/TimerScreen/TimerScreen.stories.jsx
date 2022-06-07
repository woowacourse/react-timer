import React from "react";
import TimerScreen from "./TimerScreen";

export default {
  title: "Component/TimerScreen",
  component: TimerScreen,
};

const Template = ({ hours, minutes, seconds, ...args }) => (
  <TimerScreen hours={hours} minutes={minutes} seconds={seconds} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hours: 1,
  minutes: 19,
  seconds: 45,
};
