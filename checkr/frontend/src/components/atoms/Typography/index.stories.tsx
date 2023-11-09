import { Meta, StoryFn } from "@storybook/react";
import MyTypo, { TypographyProps } from './index';

import { ThemeProvider } from '@emotion/react';
import theme from "../../../theme/Theme";

export default {
    title: 'Atoms/Typography',
    component: MyTypo,
} as Meta<TypographyProps>;

const Template: StoryFn<TypographyProps> = (args) => (
    <ThemeProvider theme = {theme}>
        <MyTypo {...args} />
    </ThemeProvider>
)
export const typo2 = Template.bind({});
typo2.args = {
    color: theme.palette.primaryColor[500],
    label: 'This is signup page',
    variant: theme.typography.caption3,
};