import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { candidateInfo, reportInfo } from "../../../constants";
import AccordionCards from ".";

export default {
    title:"Molecules/AccordionCard",
    component:AccordionCards,
} as Meta<typeof AccordionCards>


const Template: StoryFn<typeof AccordionCards> = (props) => (
    <ThemeProvider theme={theme}><AccordionCards {...props} /></ThemeProvider>
  );


  export const candidateCard = Template.bind({});
  candidateCard.args={
    title:"Candidate Information",
    cardData: candidateInfo,
  }

  export const reportInfoCard = Template.bind({});
  reportInfoCard.args={
    title:"Report Information",
    cardData: reportInfo,
  }