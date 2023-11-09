import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import account from "../../../../public/assests/images/Account.svg";
import Add from "../../../../public/assests/images/Add_box.svg";
import Analytics from "../../../../public/assests/images/Analytics.svg";
import ArrowDown from "../../../../public/assests/images/Arrow_Down.svg";
import ArrowUp from "../../../../public/assests/images/Arrow_Up.svg";
import Attachment from "../../../../public/assests/images/Attachment.svg";
import Back from "../../../../public/assests/images/Back.svg";
import Calendar from "../../../../public/assests/images/Calendar.svg";
import Calendar2 from "../../../../public/assests/images/Calendar2.svg";
import Clear from "../../../../public/assests/images/Clear.svg";
import Clock from "../../../../public/assests/images/Clock.svg";
import Close from "../../../../public/assests/images/Close.svg";
import Contacts from "../../../../public/assests/images/Contacts.svg";
import Copy from "../../../../public/assests/images/Copy.svg";
import Dashboard from "../../../../public/assests/images/Dashboard.svg";
import Dropdown from "../../../../public/assests/images/Dropdown.svg";
import Email from "../../../../public/assests/images/Email.svg";
import Export from "../../../../public/assests/images/Export.svg";
import Filter from "../../../../public/assests/images/Filter.svg";
import hammer from "../../../../public/assests/images/hammer.svg";
import hammer2 from "../../../../public/assests/images/hammer2.svg";
import Hide from "../../../../public/assests/images/Hide.svg";
import Location from "../../../../public/assests/images/Location.svg";
import logs from "../../../../public/assests/images/logs.svg";
import More from "../../../../public/assests/images/More.svg";
import Name from "../../../../public/assests/images/Name.svg";
import Package from "../../../../public/assests/images/Package.svg";
import Phone from "../../../../public/assests/images/Phone.svg";
import Screening from "../../../../public/assests/images/Screening.svg";
import search from "../../../../public/assests/images/search.svg";
import Security from "../../../../public/assests/images/Security.svg";
import unhide from "../../../../public/assests/images/unhide.svg";
import user from "../../../../public/assests/images/user.svg";
import Icon from "./index";

export default {
  title: "Atoms/Icons",
  component: Icon,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const AccountIcon = Template.bind({});
AccountIcon.args = {
  src: account,
};

export const AddIcon = Template.bind({});
AddIcon.args = {
  src: Add,
};

export const AnalyticsIcon = Template.bind({});
AnalyticsIcon.args = {
  src: Analytics,
};

export const ArrowDownIcon = Template.bind({});
ArrowDownIcon.args = {
  src: ArrowDown,
};

export const ArrowUpIcon = Template.bind({});
ArrowUpIcon.args = {
  src: ArrowUp,
};

export const AttachmentIcon = Template.bind({});
AttachmentIcon.args = {
  src: Attachment,
};

export const BackIcon = Template.bind({});
BackIcon.args = {
  src: Back,
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  src: Calendar,
};

export const Calendar2Icon = Template.bind({});
Calendar2Icon.args = {
  src: Calendar2,
};

export const ClearIcon = Template.bind({});
ClearIcon.args = {
  src: Clear,
};

export const ClockIcon = Template.bind({});
ClockIcon.args = {
  src: Clock,
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  src: Close,
};

export const ContactIcon = Template.bind({});
ContactIcon.args = {
  src: Contacts,
};

export const CopyIcon = Template.bind({});
CopyIcon.args = {
  src: Copy,
};

export const DashboardIcon = Template.bind({});
DashboardIcon.args = {
  src: Dashboard,
};

export const DropdownIcon = Template.bind({});
DropdownIcon.args = {
  src: Dropdown,
};

export const EmailIcon = Template.bind({});
EmailIcon.args = {
  src: Email,
};

export const ExportIcon = Template.bind({});
ExportIcon.args = {
  src: Export,
};

export const FilterIcon = Template.bind({});
FilterIcon.args = {
  src: Filter,
};

export const hammerIcon = Template.bind({});
hammerIcon.args = {
  src: hammer,
};

export const hammer2Icon = Template.bind({});
hammer2Icon.args = {
  src: hammer2,
};

export const hideIcon = Template.bind({});
hideIcon.args = {
  src: Hide,
};

export const LocationIcon = Template.bind({});
LocationIcon.args = {
  src: Location,
};

export const logsIcon = Template.bind({});
logsIcon.args = {
  src: logs,
};

export const MoreIcon = Template.bind({});
MoreIcon.args = {
  src: More,
};

export const NameIcon = Template.bind({});
NameIcon.args = {
  src: Name,
};

export const PackageIcon = Template.bind({});
PackageIcon.args = {
  src: Package,
};

export const PhoneIcon = Template.bind({});
PhoneIcon.args = {
  src: Phone,
};

export const ScreeningIcon = Template.bind({});
ScreeningIcon.args = {
  src: Screening,
};

export const searchIcon = Template.bind({});
searchIcon.args = {
  src: search,
};

export const SecurityIcon = Template.bind({});
SecurityIcon.args = {
  src: Security,
};

export const unhideIcon = Template.bind({});
unhideIcon.args = {
  src: unhide,
};

export const userIcon = Template.bind({});
userIcon.args = {
  src: user,
};
