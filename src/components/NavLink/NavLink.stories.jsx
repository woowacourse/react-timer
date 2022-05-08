import React from "react";
import NavLink from "./NavLink";

export default {
  title: "Component/NavLink",
  component: NavLink,
};

const Template = ({ children, to, ...args }) => (
  <NavLink to={to} {...args}>
    {children}
  </NavLink>
);

export const Default = Template.bind({});
Default.args = {
  to: "/",
  children: "link",
};
