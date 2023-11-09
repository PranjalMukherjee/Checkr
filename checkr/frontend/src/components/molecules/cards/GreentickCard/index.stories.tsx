import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TickCard from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/Theme";

export default {
  title: "Molecules/TickCard",
  component: TickCard,
} as Meta<typeof TickCard>;

const Template: StoryFn<typeof TickCard> = (args) => (
  <ThemeProvider theme={theme}>
    <TickCard {...args} />
  </ThemeProvider>
);
export const Default1 = Template.bind({});

Default1.args = {
  label: "OTP has been sent to your email!",
};
