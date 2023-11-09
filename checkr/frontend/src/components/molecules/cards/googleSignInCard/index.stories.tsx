import React from "react";
import { action } from "@storybook/addon-actions";
import GoogleSignInCard from ".";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Molecules/GoogleSignIn",
  component: GoogleSignInCard,
} as Meta<typeof GoogleSignInCard>;

const Template: StoryFn<typeof GoogleSignInCard> = (args) => (
  <GoogleSignInCard onClickGoogleSignIn={action("Signin through google")}/>
);
export const Default = Template.bind({});
Default.args = {
  onClickGoogleSignIn: ()=>{}
}
