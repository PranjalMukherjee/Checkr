import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { LogoutCard } from ".";
import { action } from "@storybook/addon-actions";
export default {
    title:"Molecules/logoutCard",
    component:LogoutCard,
} as Meta<typeof LogoutCard>


const Template: StoryFn<typeof LogoutCard> = () => (
    <ThemeProvider theme={theme}><LogoutCard handleCancel={action("Cancel button clicked")} handleLogout={action("logout button clicked")} ></LogoutCard></ThemeProvider>
  );


  export const logoutCard = Template.bind({});
  logoutCard.args={
    handleCancel:()=>{},
    handleLogout:()=>{}
  }
  