import React from "react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
