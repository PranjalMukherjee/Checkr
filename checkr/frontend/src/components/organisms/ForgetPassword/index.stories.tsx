import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { ForgetPassword } from ".";
import { action } from "@storybook/addon-actions";

export default {
    title:"Organisms/ForgetPassword",
    component:ForgetPassword,
} as Meta<typeof ForgetPassword>


const Template: StoryFn<typeof ForgetPassword> = () => (
    <ThemeProvider theme={theme}><ForgetPassword onClickContinueButton={action("cliked on continue button")}></ForgetPassword></ThemeProvider>
  );


  export const forgetPassword = Template.bind({});
  forgetPassword.args={
    onClickContinueButton:()=>{}
  }
  