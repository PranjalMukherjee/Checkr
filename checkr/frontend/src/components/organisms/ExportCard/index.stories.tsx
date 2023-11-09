import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import theme from "../../../theme/Theme";
import { ThemeProvider } from "styled-components";
import { ExportCandidateCVCard } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/ExportCard",
  component: ExportCandidateCVCard,
} as Meta<typeof ExportCandidateCVCard>;

const Template:  StoryFn<typeof ExportCandidateCVCard> = (args) => (
  <ThemeProvider theme={theme}>
    <ExportCandidateCVCard {...args} onExportClick={action("export button is clicked")}/>
  </ThemeProvider>
);

export const exportCandidateCard = Template.bind({});
exportCandidateCard.args = {
  onExportClick: ()=>{},
};
