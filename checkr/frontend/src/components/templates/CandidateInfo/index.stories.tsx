import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CandidateInfoTemplate from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { CandidateInfoTemplateProps } from ".";
import HeaderCard from "../../molecules/cards/headerCard";
import { Box, Stack } from "@mui/material";
import AccordionCards from "../../molecules/Accordions";
import { candidateInfo, reportInfo } from "../../../constants";
import CourtSearchesTable from "../../organisms/courtSearchesTable";
import Sidebar from "../../molecules/Sidebar";

export default {
  title: "Templates/CandidateInfoTemplate",
  component: CandidateInfoTemplate,
} as Meta;

const Template: StoryFn<CandidateInfoTemplateProps> = (args) => (
  <ThemeProvider theme={theme}>
    <CandidateInfoTemplate {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  leftnavbar: <Sidebar />,
  body: (
    <Stack gap={"24px"}>
      <AccordionCards title="Candidate Information" cardData={candidateInfo} />
      <Box>
      <AccordionCards title="Report Information" cardData={reportInfo} />
      </Box>
      <CourtSearchesTable />
    </Stack>
  ),
  header: <HeaderCard />
};
