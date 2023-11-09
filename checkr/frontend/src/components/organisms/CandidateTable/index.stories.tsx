import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/Theme";
import DataTable, { TableProps } from ".";
export default {
  title: "Organisms/DataTable", // Update the title as desired
  component: DataTable,
} as Meta;
const Template: StoryFn<TableProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DataTable {...args} />
  </ThemeProvider>
);
export const Candidate = Template.bind({});
Candidate.args = {
  isCandidateFilter: true,
};
