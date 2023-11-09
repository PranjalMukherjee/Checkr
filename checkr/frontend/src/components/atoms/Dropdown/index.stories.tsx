import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Dropdown, { DropdownProps } from "./index";

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} onClick={action("Dropdown clicked")}/>;

export const Default = Template.bind({});
Default.args = {
  width: "24px",
  height: "24px",
};
