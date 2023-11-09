import React from "react";

import Pagination from ".";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Molecules/Pagination",
  component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => <Pagination />;
export const Default = Template.bind({});
