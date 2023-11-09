import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { PreAdverseActionNotice } from ".";


export default {
    title:"Organisms/PreAdverseActionNotice",
    component: PreAdverseActionNotice,
} as Meta<typeof PreAdverseActionNotice>


const Template: StoryFn<typeof PreAdverseActionNotice> = () => (
    <ThemeProvider theme={theme}><PreAdverseActionNotice></PreAdverseActionNotice></ThemeProvider>
  );


  export const preAdverActionNotice = Template.bind({});
  