import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TextTypo, { TextTypoProps } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { action } from "@storybook/addon-actions";
export default {
  title: "Molecules/TextTypo",
  component: TextTypo,
} as Meta;

const Template: StoryFn<TextTypoProps> = (args) => (
  <ThemeProvider theme={theme}>
    <TextTypo onChange={action("email entered in the text field")} {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  height: "36px",
  width: "384px",
  color: theme.palette.textColor.medemp,
  variant: "caption3",
  placeholder: "abc@email.com",
  type: "text",
  border: "1px solid",
  bcolor: `${theme.palette.structural.stroke}`,
  bradius: "4px",
  bgcolor: `${theme.palette.structural.white}`,
};
