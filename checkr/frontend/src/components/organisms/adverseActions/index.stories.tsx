import React from "react";

import AdverseActionsTable from ".";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Organisms/AdverseActions",
  component: AdverseActionsTable,
} as Meta<typeof AdverseActionsTable>;

const Template: StoryFn<typeof AdverseActionsTable> = (args) => <AdverseActionsTable isCandidateFilter/>;
export const Default = Template.bind({});
