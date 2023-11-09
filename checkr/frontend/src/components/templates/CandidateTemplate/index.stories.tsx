import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CandidateTemplate from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { CandidateTemplateProps } from "./index";
import DataTable from "../../organisms/CandidateTable";
import HeaderCard from "../../molecules/cards/headerCard";
import Sidebar from "../../molecules/Sidebar";

export default {
  title: "Templates/CandidateTemplate",
  component: CandidateTemplate,
} as Meta;

const Template: StoryFn<CandidateTemplateProps> = (args) => (
  <ThemeProvider theme={theme}>
    <CandidateTemplate {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  content: <DataTable isCandidateFilter={true} />,
  header: <HeaderCard />,
  sidebar: <Sidebar/>
};
