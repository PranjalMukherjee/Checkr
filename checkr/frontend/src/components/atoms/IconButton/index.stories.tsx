import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import IconButton from ".";
import FILTER from "../../../../public/assests/images/Filter.svg"
import MANUALORDER from "../../../../public/assests/images/manualOrder.svg"
import MORE from "../../../../public/assests/images/More.svg"
import LOGO from "../../../../public/assests/images/Logo.svg"
import { action } from '@storybook/addon-actions';

export default {
    title:"atoms/button",
    component:IconButton,
} as Meta<typeof IconButton>


const Template: StoryFn<typeof IconButton> = (args) => (
  <ThemeProvider theme={theme}><IconButton {...args} onClick={action("Button clicked")}></IconButton></ThemeProvider>
  );


  export const filter = Template.bind({});
  filter.args = {
    icon :`${FILTER}`,
    text : "Filter",
    variant: "outlined",
    sx : {
        color : theme.palette.textColor.medemp,
        borderColor : theme.palette.structural.stroke,
    }
  }

  export const manualOrder = Template.bind({});
  manualOrder.args = {
    icon :`${MANUALORDER}`,
    text : "Manual Order",
    variant: "contained",
    sx : {
        color : theme.palette.structural.white,
        backgroundColor: theme.palette.primaryColor[500],
    }
  }

  export const signup = Template.bind({});
  signup.args = {
    text : "Sign up",
    variant: "contained",
    sx : {
        color : theme.palette.structural.white,
        backgroundColor: theme.palette.primaryColor[500],
        Padding: "8px 16px 8px 16px",
        width:"384px",
        height:"44px"
    }
  }

  export const more = Template.bind({});
  more.args = {
    text: <img src={MORE} alt="More" />,
    variant: "outlined",
    sx : {
        color : theme.palette.textColor.medemp,
        borderColor : theme.palette.structural.stroke,
        padding:"8px"
    }
  }

  export const logo = Template.bind({});
  logo.args = {
    icon :`${LOGO}`,
    variant: "text",
  }
  