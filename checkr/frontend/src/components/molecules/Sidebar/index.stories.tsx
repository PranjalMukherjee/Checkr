import React from "react";

import Sidebar from ".";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Molecules/Sidebar",
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar/>;
export const Default = Template.bind({});
