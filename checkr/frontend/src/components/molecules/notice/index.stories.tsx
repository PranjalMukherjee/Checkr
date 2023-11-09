import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { NoticeCard } from ".";
import { PRE_ADVERACTION } from "../../../constants";
import { action } from "@storybook/addon-actions";
export default {
    title:"Molecules/noticeCard",
    component:NoticeCard,
} as Meta<typeof NoticeCard>


const Template: StoryFn<typeof NoticeCard> = (props) => (
    <ThemeProvider theme={theme}><NoticeCard {...props} handleClose={action("close iconbutton clicked")} handleSubmit={action("submit button clicked")}></NoticeCard></ThemeProvider>
  );


  export const noticeCard = Template.bind({});
  noticeCard.args={
    preAdverAction:PRE_ADVERACTION
  }