import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Signin from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/SignIn",
  component: Signin,
} as Meta<typeof Signin>;

const Template: StoryFn<typeof Signin> = (args) => (
  <ThemeProvider theme={theme}>
    <Signin
      onClickForgotPassword={action("cliked on the forget password button")}
      onClickGoogleSignIn={action("clicked on the google sign in button")}
      onClickSignIn={action("clicked on the sgn in button")}
      onClickSignUp={action("clicked on the sign up button")}
      {...args}
    />
  </ThemeProvider>
);

export const Default = Template.bind({});

