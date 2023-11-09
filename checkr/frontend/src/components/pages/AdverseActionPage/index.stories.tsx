import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import AdverseActionsPage from ".";

export default {
    title:"Pages/AdverseActionsPage",
    component: AdverseActionsPage,
} as Meta<typeof AdverseActionsPage>


const Template: StoryFn<typeof AdverseActionsPage> = () => (
    <ThemeProvider theme={theme}><AdverseActionsPage /></ThemeProvider>
  );


  export const signInPage = Template.bind({});
  