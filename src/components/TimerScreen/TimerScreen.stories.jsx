import React from "react";
import TimerScreen from "./TimerScreen";

export default {
  title: "Component/TimerScreen",
  component: TimerScreen,
};

const Template = ({ remainTime, ...args }) => (
  <TimerScreen remainTime={remainTime} {...args}></TimerScreen>
);

export const Default = Template.bind({});
Default.args = {
  remainTime: {
    hour: 1,
    minute: 19,
    second: 45,
  },
};
