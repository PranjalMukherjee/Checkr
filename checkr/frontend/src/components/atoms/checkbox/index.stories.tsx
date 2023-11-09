import {Meta,StoryFn} from "@storybook/react";
import React from "react";
import Checkbox from ".";
import theme from "../../../theme/Theme";
import { action } from '@storybook/addon-actions';

export default {
    title:"atoms/Checkbox",
    component:Checkbox,
    argTypes:{
        color:{
            control:{type:"radio"},
            options:["primary","secondary","default","success","error","warning"]
        },
    }
} as Meta<typeof Checkbox>


const Template: StoryFn<typeof Checkbox> = (args) => (
    <Checkbox {...args} onChange={action('Checkbox clicked')}/>
  );


  export const Primary = Template.bind({});
  Primary.args={
    sx:{
        color:theme.palette.structural.stroke,
        "&.Mui-checked": {
            color: theme.palette.primaryColor[500],
          }
      }
  }