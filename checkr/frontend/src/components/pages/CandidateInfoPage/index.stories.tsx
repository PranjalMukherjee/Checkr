import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { CandidateInfoPage } from ".";


export default {
    title:"Pages/CandidateInfoPage",
    component: CandidateInfoPage,
} as Meta<typeof CandidateInfoPage>


const Template: StoryFn<typeof CandidateInfoPage> = () => (
    <ThemeProvider theme={theme}><CandidateInfoPage /></ThemeProvider>
  );


  export const candidateInfoPage = Template.bind({});
  