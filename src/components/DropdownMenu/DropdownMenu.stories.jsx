import React from "react";
import DropdownMenu from "./DropdownMenu";

export default {
  title: "Component/DropdownMenu",
  component: DropdownMenu,
};

const Template = ({ children, ...args }) => (
  <DropdownMenu {...args}>{children}</DropdownMenu>
);

export const Default = Template.bind({});
