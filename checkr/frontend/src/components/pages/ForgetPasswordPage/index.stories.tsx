import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { ForgetPasswordPage } from ".";

export default {
  title: "Pages/ForgetPasswordPage",
  component: ForgetPasswordPage,
} as Meta<typeof ForgetPasswordPage>;

const Template: StoryFn<typeof ForgetPasswordPage> = () => (
  <ThemeProvider theme={theme}>
    <ForgetPasswordPage />
  </ThemeProvider>
);

export const forgetPasswordPage = Template.bind({});
