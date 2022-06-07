import React from "react";
import CorpAddress from "./CorpAddress";

export default {
  title: "Component/CorpAddress",
  component: CorpAddress,
};

const Template = ({ children, ...args }) => (
  <CorpAddress {...args}>{children}</CorpAddress>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>사업자: 박공원</p>
      <p>사업자등록번호: 220208</p>
      <p>주소: 서울특별시 송파구 루터회관 14층 페어룸4</p>
    </>
  ),
};
