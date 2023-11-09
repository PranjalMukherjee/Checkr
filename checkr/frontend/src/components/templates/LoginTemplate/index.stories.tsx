import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { LoginTemplate } from ".";
import LOGINSCREEN from "../../../../public/assests/images/Login screen.svg";
import Signin from "../../organisms/SignIn";
import { ForgetPassword } from "../../organisms/ForgetPassword";
import Signup from "../../organisms/Signup";
import { action } from "@storybook/addon-actions";
export default {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
} as Meta<typeof LoginTemplate>;

const Template: StoryFn<typeof LoginTemplate> = (props) => (
  <ThemeProvider theme={theme}>
    <LoginTemplate {...props} />
  </ThemeProvider>
);

export const SignIn = Template.bind({});
SignIn.args = {
  image: LOGINSCREEN,
  content: (
    <Signin/>
  ),
};
export const SignUp = Template.bind({});
SignUp.args = {
  image: LOGINSCREEN,
  content: (
    <Signup
    signUpButton={action("clicked on the sign up button")}
    revertSignInButton={action("clicked on the sign in button")}
    
    />
  ),
};
export const Forgetpassword = Template.bind({});
Forgetpassword.args = {
  image: LOGINSCREEN,
  content: <ForgetPassword />,
};
