import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { SignUpPage } from ".";


export default {
    title:"Pages/SignUpPage",
    component: SignUpPage,
} as Meta<typeof SignUpPage>


const Template: StoryFn<typeof SignUpPage> = () => (
    <ThemeProvider theme={theme}><SignUpPage /></ThemeProvider>
  );


  export const signUpPage = Template.bind({});
  