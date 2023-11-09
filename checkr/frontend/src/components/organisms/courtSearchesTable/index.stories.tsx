import React from "react";

import CourtSearchesTable from ".";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Organisms/CourtSearches",
  component: CourtSearchesTable,
} as Meta<typeof CourtSearchesTable>;

const Template: StoryFn<typeof CourtSearchesTable> = (args) => <CourtSearchesTable />;
export const Default = Template.bind({});
