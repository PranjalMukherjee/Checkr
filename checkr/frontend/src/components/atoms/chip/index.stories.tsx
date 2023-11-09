import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import Chip from ".";
import { ThemeProvider } from "styled-components";

export default {
    title:"atoms/Chip",
    component:Chip,
} as Meta<typeof Chip>


const Template: StoryFn<typeof Chip> = (args) => (
    <ThemeProvider theme={theme}><Chip {...args} /></ThemeProvider>
  );


  export const clear = Template.bind({});
  clear.args={
    label: "CLEAR",
    backgroundColor: theme.palette.accentColor.lightgreen,
    color: theme.palette.accentColor.green
  }

  export const consider = Template.bind({});
  consider.args={
    label: "CONSIDER",
    backgroundColor: theme.palette.accentColor.lightyellow,
    color: theme.palette.accentColor.yellow
  }

  export const engage = Template.bind({});
  engage.args={
    label: "ENGAGE",
    backgroundColor: theme.palette.accentColor.lightgreen,
    color: theme.palette.accentColor.green
  }

  export const adverseAction = Template.bind({});
  adverseAction.args={
    label: "ADVERSE ACTION",
    backgroundColor: theme.palette.accentColor.lightyellow,
    color: theme.palette.accentColor.yellow
  }