import React from "react";
import Logo from "./Logo";

export default {
  title: "Component/Logo",
  component: Logo,
};

const Template = ({ children, ...args }) => <Logo {...args}>{children}</Logo>;

export const Default = Template.bind({});
Default.args = {};
