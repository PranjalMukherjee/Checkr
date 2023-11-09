import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { SignInPage } from ".";


export default {
    title:"Pages/SignInPage",
    component: SignInPage,
} as Meta<typeof SignInPage>


const Template: StoryFn<typeof SignInPage> = () => (
    <ThemeProvider theme={theme}><SignInPage /></ThemeProvider>
  );


  export const signInPage = Template.bind({});
  