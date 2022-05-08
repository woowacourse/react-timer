import React from "react";
import SmallButton from "./SmallButton";

export default {
  title: "Component/SmallButton",
  component: SmallButton,
};

const Template = ({ children, ...args }) => (
  <SmallButton {...args}>{children}</SmallButton>
);

export const Default = Template.bind({});
Default.args = {
  children: "5",
};
