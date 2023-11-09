import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextInput, { InputProps } from ".";
import theme from '../../../theme/Theme';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from "@mui/material";
export default {
  title: "Atoms/TextInput",
  component: TextInput,
} as Meta;

const Template: StoryFn<InputProps> = (args) => (
  <ThemeProvider theme={theme}>
 
 <TextInput {...args} onChange={action("text entered in text field")}/>
  </ThemeProvider>
);

export const BeforeInput = Template.bind({});
BeforeInput.args = {
  placeholder: "abc@email.com",
  type: "text",
  width: "384px",
  height: "36px",
  border: "1px solid",
  bcolor: `${theme.palette.structural.stroke}`,
  bradius: '4px',
  bgcolor: `${theme.palette.structural.white}`,
  };
export const AfterInput = Template.bind({});
AfterInput.args = {
  type: "text",
  width: "384px",
  height: "36px",
  border: "1px solid",
  bcolor: `${theme.palette.structural.stroke}`,
  bgcolor: theme.palette.structural.white,
  bradius: '4px',
  value: "abc@gmail.com"
};

