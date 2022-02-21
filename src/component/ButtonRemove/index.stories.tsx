import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import "./index";
import { ButtonRemove } from "./index";

export default {
  title: "ButtonRemove",
  component: ButtonRemove,
  args: {},
} as ComponentMeta<typeof ButtonRemove>;

const Template: ComponentStory<typeof ButtonRemove> = (args) => (
  <ButtonRemove {...args} />
);

export const Story = Template.bind({});
Story.args = {};
