import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Signup, { SignUpProps } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { action } from "@storybook/addon-actions";
export default {
  title: "Organisms/SignUp",
  component: Signup,
} as Meta;

const Template: StoryFn<SignUpProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Signup 
    signUpButton={action("clicked on the sign up button")}
    revertSignInButton={action("clicked on the sign in button")}
    {...args} />
  </ThemeProvider>
);

export const BeforeInput = Template.bind({});

