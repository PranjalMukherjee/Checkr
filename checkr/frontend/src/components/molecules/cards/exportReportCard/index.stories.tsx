import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/Theme";
import ExportReportCard from './index';

export default {
  title: "Molecules/ExportReportCard",
  component: ExportReportCard,
} as Meta<typeof ExportReportCard>;

const Template: StoryFn<typeof ExportReportCard> = (args) => (
  <ThemeProvider theme={theme}>
    <ExportReportCard/>
  </ThemeProvider>
);
export const Default1 = Template.bind({});

