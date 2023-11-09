import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import InformationCard from ".";
import { candidateInfo } from "../../../constants";

export default {
    title:"Molecules/InfoCard",
    component:InformationCard,
} as Meta<typeof InformationCard>


const Template: StoryFn<typeof InformationCard> = (props) => (
    <ThemeProvider theme={theme}><InformationCard {...props}></InformationCard></ThemeProvider>
  );


  export const infoCard = Template.bind({});
  infoCard.args={
    title: candidateInfo[0].title,
    text:candidateInfo[0].text,
    src:candidateInfo[0].icon
  }