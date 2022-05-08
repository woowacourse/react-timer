import React from "react";
import Input from "./Input";

export default {
  title: "Component/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "input",
};
