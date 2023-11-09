export type CandidateInformation = {
  id: number;
  title: string;
  text: string | null;
  icon: string;
};

import user from "../public/assests/images/user.svg";
import email from "../public/assests/images/Email.svg";
import dob from "../public/assests/images/Name.svg";
import phone from "../public/assests/images/Phone.svg";
import location from "../public/assests/images/Location.svg";
import security from "../public/assests/images/Security.svg";
import calendar2 from "../public/assests/images/Calendar2.svg";
import hammer from "../public/assests/images/hammer2.svg";
import Package from "../public/assests/images/Package.svg";
import clear from "../public/assests/images/Clear.svg";
import calendar from "../public/assests/images/Calendar.svg";
import clock from "../public/assests/images/Clock.svg";

export const candidateInfo: CandidateInformation[] = [
  {
    id: 1,
    title: "Name",
    text: "John Smith",
    icon: user,
  },
  {
    id: 2,
    title: "Email",
    text: "John.smith@checkr.com",
    icon: email,
  },
  {
    id: 3,
    title: "DOB",
    text: "1990-09-10",
    icon: dob,
  },
  {
    id: 4,
    title: "Phone",
    text: "(555) 555-5555",
    icon: phone,
  },
  {
    id: 5,
    title: "Zipcode",
    text: "94158",
    icon: location,
  },
  {
    id: 6,
    title: "Social Security",
    text: "XXX-XX-6789",
    icon: security,
  },
  {
    id: 7,
    title: "Drivers License",
    text: "FTEST1111 (CA)",
    icon: dob,
  },
  {
    id: 8,
    title: "Created At",
    text: "Nov 29, 2016 11:05:57AM",
    icon: calendar2,
  },
];

export const reportInfo: CandidateInformation[] = [
  {
    id: 1,
    title: "Status",
    text: "Clear",
    icon: clear,
  },
  {
    id: 2,
    title: "Adjudication",
    text: "-",
    icon: hammer,
  },
  {
    id: 3,
    title: "Package",
    text: "Employee pro",
    icon: Package,
  },
  {
    id: 4,
    title: "Created at",
    text: "Dec 1, 2016 12:00:00 PM",
    icon: calendar2,
  },
  {
    id: 5,
    title: "Completed Date",
    text: "Dec 4, 2016 12:00:00 PM",
    icon: calendar,
  },
  {
    id: 6,
    title: "Turn Around Time",
    text: "1 Day, 14 hours",
    icon: clock,
  },
];

export const SignInOrganism: any = {
  headlabel: "Sign in",
  sublabel: "Please enter your login credentails",
  email: "Email",
  emailplaceholder: "abc@gmail.com",
  password: "Password",
  passwordplaceholder: "********",
  footerlabel: "Remember me",
  forgetpassword: "Forget Password?",
  noaccount: "Don't have an account?",
  signup: "Sign up",
  emailtype: "text",
  passwordtype: "password",
  userNotfound: "User Not Found, Please Sign Up"
};
export const SignUpOrganism: any = {
  headlabel: "Sign up",
  sublabel: "Please sign up to start exploring the platform",
  email: "Email",
  emailplaceholder: "abc@gmail.com",
  password: "Password",
  passwordplaceholder: "********",
  confirmpassword: "Confirm Password",
  check: "I agree to the",
  privacypolicy: "Privacy Policy",
  existingaccount: "Already a member?",
  signin: "Sign in",
  emailtype: "text",
  passwordtype: "password",
  passwordValidator : "*Password length should be at least 6 characters(no special characters)",
  confirmPasswordValidator: "*Passwords do not match!",
  emailValidator: "*Please enter a valid email!"
};

export enum AdverseActionStatus {
  ALL = "All Status",
  PENDING = "Pending",
  SCHEDULED = "Scheduled",
  DISPUTE = "Dispute",
  CANCELED = "Canceled",
  UNDELIVERABLE = "Undeliverable",
}

export const ADVERSE_ACTION_FILTER_LABEL_DATA = {
  heading: "Status",
  labels: [
    {
      label: AdverseActionStatus.ALL,
    },
    {
      label: AdverseActionStatus.PENDING,
    },
    {
      label: AdverseActionStatus.SCHEDULED,
    },
    {
      label: AdverseActionStatus.DISPUTE,
    },
    {
      label: AdverseActionStatus.CANCELED,
    },
    {
      label: AdverseActionStatus.UNDELIVERABLE,
    },
  ],
};

export const CANDIDATES_FILTER_LABEL_DATA = {
  title: "Filters",
  firstSubTitle: {
    title: "Status",
    labelOptions: {
      values: ["all", "clear", "consider"],
      label: ["All Status", "Clear", "Consider"],
    },
  },
  secondSubTitle: {
    title: "Adjudication",
    labelOptions: {
      values: ["all", "engage", "adverse action"],
      label: ["All", "Engaged", "Pre adverse action"],
    },
  },
};

export const PreAdverseActionNoticeData: any = {
  EMAIL_BODY:
    "You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.",
  PPE_ADVERSE_ACTIONS: [
    {
      id: "1",
      action: "Driving while license suspended",
    },
    {
      id: "2",
      action: "Assault Domestic Violence",
    },
    {
      id: "3",
      action: "Unable to verify employment history at Dunder Mifflin",
    },
  ],

  SELECT_HELPERTEXT: "Select the charges for the pre adverse action",
  EMAIL_ENDING_MESSAGE:
    "If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.",
  EMAIL_ENDING_1: "Sincerely,",
  EMAIL_ENDING_2: "Chekr-bpo",
  FOOTER_TEXT: "Auto send post adverse action",
  PREVIEW_NOTICE_BUTTON: "Preview Notice",
};

export const ENTER_OTP = "Please enter OTP";
export const FORGET_PASSWORD = "Forgot Password?";

export const FORGET_PASSWORD_SUBTEXT =
  "No worries, we’ll send you reset instructions";
export const OTP_PAGE_SUBTEXT = "OTP has been sent to your mail";

export const EMAIL_PLACEHOLDER = "Example@gmail.com";

export const CONTINUE = "Continue";
export const RESET_PASSWORD = "Reset Password";

export const OTP_PAGE_RESEND_TEXT = "Didn’t receive the OTP?";
export const RESEND = "Resend OTP";

export const EMAIL = "vidhya@gmail.com";
export const EMAIL1 = "vidhya@zemosolabs.com";
export const INVALID_EMAIL = "vidhya@yahoo.com";

export const OTP_SUCCESSFULL_MESSAGE = "OTP has been sent to your email!";
export const PRE_ADVERSE_MESSAGE = "Pre Adverse Action notice succesfully sent";


export const EMAIL_DATA = [
  {
    id: "1",
    label: "From:",
    email: "Kyle@Chekr.Com",
  },
  {
    id: "2",
    label: "To:",
    email: "John.Smith@Checkr.Com",
  },
  {
    id: "3",
    label: "Subject:",
    subject: "Pre-adverse action notice - Checkr-Bpo",
  },
];

export const ATTACHMENT_DATA = [
  "Summary of right under the FCRA",
  "Copy of background report",
];

export const TITLE = "Pre-Adverse Action Notice";

export const WARNINGS = [
  {
    id: 1,
    message:
      "Please carefully review the list of charges (in bold) and your contact information.",
  },
  {
    id: 2,
    message:
      "Please note that we will send the corresponding post adverse action email automatically after 7 days.",
  },
];

export const EMAIL_DETAILS = {
  name: "Dear John Smith,",
  content:
    " You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.",
  ending:
    "If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.",
  sincerly: "Sincerely,",
  sender: "Checkr-bpo",
};

export const PRE_ADVERACTION = ["Assault Domestic Violence"];

export const LOGOUT_TEXT = "Confirm Logout";
export const LOGOUT_SUBTEXT = "Are you sure you want to logout?";

export const DATA_TABLE = {
  tableHeader: "Candidate Information",
  isDate: "DATE",
  searchPlaceholder: "Search any candidate",
  columnsData: [
    { id: 1, name: "NAME" },
    { id: 2, name: "ADJUDICATION" },
    { id: 3, name: "STATUS" },
    { id: 4, name: "LOCATION" },
    { id: 5, name: "DATE" },
    {},
  ],
  filter: "Filter",
  altFilterIconText: "filter-icon",
  altMockIconText: "dot-icon",
};
export const TABLE_DATA = [
  {
    id: 1,
    name: "John Smith",
    adjudication: "ADVERSE ACTION",
    status: "CLEAR",
    location: "Barrouallie",
    date: "2/22/2022",
  },
  {
    id: 2,
    name: "Serene",
    adjudication: "-",
    status: "CLEAR",
    location: "Vänersborg",
    date: "3/13/2022",
  },
  {
    id: 3,
    name: "Walsh",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
  },
  {
    id: 4,
    name: "Maurizia",
    adjudication: "ENGAGE",
    status: "CLEAR",
    location: "Sukamanah",
    date: "2/20/2022",
  },
  {
    id: 5,
    name: "Kendre",
    adjudication: "-",
    status: "CONSIDER",
    location: "Beutong Ateuh",
    date: "5/19/2022",
  },
  {
    id: 6,
    name: "Erastus",
    adjudication: "ADVERSE ACTION",
    status: "CLEAR",
    location: "Höviyn Am",
    date: "12/1/2021",
  },
  {
    id: 7,
    name: "Jereme",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sharïngol",
    date: "7/26/2022",
  },
  {
    id: 8,
    name: "John Smith",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
    date: "5/28/2022",
  },
  {
    id: 9,
    name: "Cari",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboão da Serra",
    date: "5/23/2022",
  },
  {
    id: 10,
    name: "Kimble",
    adjudication: "-",
    status: "CLEAR",
    location: "Veselí nad Moravou",
    date: "8/24/2022",
  },
];

export const ExportCandidateCard: any = {
  HEADING: "Export Candidate Reports CSV",
  FROM: "Reports From",
  TO: "Reports To",
  CalenderButton: "Choose date, selected date is Jan 1, 2000",
  CALENDERICON: "CalendarIcon",
  EXPORTS_BUTTON: "Export Report",
  DatePickersData: [
    {
      id: "1",
      label: "Reports From",
      stateKey: "fromDate",
    },
    {
      id: "2",
      label: "Reports To",
      stateKey: "toDate",
    },
  ],
};

export type CandidateInformationAdverse = {
  id: number;
  name: string;
  status: string;
  prenoticedate: string;
  postnoticedate: string;
};

export const candidateInfoAdverse: CandidateInformationAdverse[] = [
  {
    id: 0,
    name: "John Smith",
    status: "SCHEDULED",
    prenoticedate: "2/22/2022",
    postnoticedate: "2/22/2022",
  },
  {
    id: 1,
    name: "Serene",
    status: "SCHEDULED",
    prenoticedate: "3/13/2022",
    postnoticedate: "3/13/2022",
  },
  {
    id: 2,
    name: "Walsh",
    status: "SCHEDULED",
    prenoticedate: "7/2/2022",
    postnoticedate: "7/2/2022",
  },
  {
    id: 3,
    name: "Maurizia",
    status: "SCHEDULED",
    prenoticedate: "2/20/2022",
    postnoticedate: "2/20/2022",
  },
  {
    id: 4,
    name: "Kendre",
    status: "SCHEDULED",
    prenoticedate: "5/19/2022",
    postnoticedate: "5/19/2022",
  },
  {
    id: 5,
    name: "Jereme",
    status: "SCHEDULED",
    prenoticedate: "7/26/2022",
    postnoticedate: "7/26/2022",
  },
  {
    id: 6,
    name: "John Smith",
    status: "SCHEDULED",
    prenoticedate: "5/28/2022",
    postnoticedate: "5/28/2022",
  },
  {
    id: 7,
    name: "Cari",
    status: "SCHEDULED",
    prenoticedate: "5/23/2022",
    postnoticedate: "5/23/2022",
  },
  {
    id: 8,
    name: "Kimble",
    status: "SCHEDULED",
    prenoticedate: "8/24/2022",
    postnoticedate: "8/24/2022",
  },
];

export const CandidateInformationAdverse = {
  tableHeader: "Candidate Information",
  isDate: "DATE",
  searchPlaceholder: "Search any candidate",
  columnsData: [
    { id: 1, name: "NAME" },
    { id: 2, name: "STATUS" },
    { id: 3, name: "PRE NOTICE DATE" },
    { id: 4, name: "POST NOTICE DATE" },
  ],
  filter: "Filter",
  altFilterIconText: "filter-icon",
  altMockIconText: "dot-icon",
};

export const CourtSearches = {
  tableHeader: "Court Searches",
  isDate: "DATE",
  columnsData: [
    { id: 1, name: "SSN VERIFICATION" },
    { id: 2, name: "SEX OFFENDER" },
    { id: 3, name: "GLOBAL WATCHLIST" },
    { id: 4, name: "FEDERAL CRIMINAL" },
    { id: 5, name: "COUNTY CRIMINAL" },
    { id: 6, name: "SSN VERIFICATION DATE" },
    { id: 7, name: "SEX OFFENDER DATE" },
    { id: 8, name: "GLOBAL WATCHLIST DATE" },
    { id: 9, name: "FEDERAL CRIMINAL DATE" },
    { id: 10, name: "COUNTY CRIMINAL DATE" },
  ],
};


export const candidateInitialState = {
  id: 0,
  status: "",
  adjudication: "",
  name: "",
  location: "",
  email: "",
  dob: "",
  phone_no: "",
  zipcode: "",
  driver_license: "",
  social_security: "",
  created_at: "",
  date: "",
};
export const reportInitialState = {
  id: 2,
  status: "",
  adjudication: null,
  packageName: "",
  createdAt: "",
  completedDate: "",
  turnAroundTime: "",
};


export const LogoutConstants: any = {
  profileName : "James Rodriguez",
  profileSubtext : "James.co",
  sideNavBarHeadings : ["Home" , "Candidates", "Adverse Action", "Logs", "Analytics", "Account", "Screenings"]
};


export const BASE_URl = "https://bc104-ms.fe-assignment.tk";
export const BASE_URl_BACKEND = "https://bc104-be.fe-assignment.tk";

export const DOMAIn_ID = "dev-zjir0u40iv2ujkj4.us.auth0.com";
export const CLIENT_ID = "BKJ8ySCVfP9XjbS8CpTR6OmVQBxAQOk0";

