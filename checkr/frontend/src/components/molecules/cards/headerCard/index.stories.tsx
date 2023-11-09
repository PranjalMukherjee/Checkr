import React from "react";
import HeaderCard from ".";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/HeaderCard",
  component: HeaderCard,
} as Meta<typeof HeaderCard>;

const Template: StoryFn<typeof HeaderCard> = (args) => <HeaderCard onClickExport={action("export button clicked")}/>;
export const Default = Template.bind({});

Default.args={
  onClickExport: ()=>{}
}

