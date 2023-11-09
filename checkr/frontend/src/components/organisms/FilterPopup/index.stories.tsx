import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Filter from "./index";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/Theme";
import { FilterProps } from ".";
import { action } from "@storybook/addon-actions";
export default {
  title: "Organisms/Filter",
  component: Filter,
} as Meta;
const Template: StoryFn<FilterProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Filter {...args} handleClose={action("close function is initiated")} handleFilterStatusChange={action("status changes in the filter")}/>
  </ThemeProvider>
);
export const Candidate = Template.bind({});
Candidate.args = {
  isCandidatesFilter: true,
  handleClose: () => {},
  handleFilterStatusChange: () => {},
  filterStatus: [""],
  height: "70%",
  left:"-984px",
  top: "10px",
};

export const Adverse = Template.bind({});
Adverse.args = {
  isCandidatesFilter: false,
  handleClose: () => {},
  handleFilterStatusChange: () => {},
  filterStatus: [""],
  height: "70%",
  left:"-984px",
  top: "10px",
};

