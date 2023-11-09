import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import PreAdversePage from ".";

export default {
  title: "Pages/PreAdversePage",
  component: PreAdversePage,
} as Meta<typeof PreAdversePage>;

const Template: StoryFn<typeof PreAdversePage> = () => (
  <ThemeProvider theme={theme}>
    <PreAdversePage />
  </ThemeProvider>
);

export const preAdverse = Template.bind({});
