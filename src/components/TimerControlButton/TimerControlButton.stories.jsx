import React from "react";
import TimerControlButton from "./TimerControlButton";

export default {
  title: "Component/TimerControlButton",
  component: TimerControlButton,
};

const Template = ({ children, ...args }) => (
  <TimerControlButton {...args}>{children}</TimerControlButton>
);

export const Default = Template.bind({});
Default.args = {
  controlType: "play",
};
