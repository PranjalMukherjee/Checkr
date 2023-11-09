import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import CandidatePage from ".";

export default {
    title:"Pages/CandidatePage",
    component: CandidatePage,
} as Meta<typeof CandidatePage>


const Template: StoryFn<typeof CandidatePage> = () => (
    <ThemeProvider theme={theme}><CandidatePage /></ThemeProvider>
  );


  export const signInPage = Template.bind({});
  