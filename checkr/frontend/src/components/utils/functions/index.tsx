import React from "react";
import theme from "../../../theme/Theme";
import Typography from "../../atoms/Typography";
import { Grid, styled } from "@mui/material";
import IconButton from "../../atoms/IconButton";
import MyTypo from "../../atoms/Typography";
import API from "../../../services/index";
import axios from "axios";

const Button = styled(IconButton)({
  backgroundColor: theme.palette.structural.white,
  border: "none",
  width: "190px",
  height: "54px",
  bordeRadius: "6px",
  justifyContent: "flex-start",
  textTransform: "none",
  borderColor: theme.palette.textColor.white,
  color: theme.palette.greyColor.icon01,
  "&:hover": {
    backgroundColor: theme.palette.textColor.white,
    borderColor: theme.palette.textColor.white,
  },
  ":disabled": {
    borderColor: theme.palette.textColor.white,
  },
});

interface TypoProps {
  label: string;
}

const CustomMyTypo = ({ label }: TypoProps) => {
  return (
    <Typography
      label={label}
      variant="caption"
      color={`${theme.palette.textColor.medemp}`}
    />
  );
};

export default CustomMyTypo;

export const generateOTP = () => {
  const digits = "0123456789";
  const randomBytes = new Uint8Array(4);
  crypto.getRandomValues(randomBytes);
  let OTP = "";
  const length = digits.length;

  for (let i = 0; i < randomBytes.length; i++) {
    OTP += digits[randomBytes[i] % length];
  }

  return OTP;
};
export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^.@]+\.[^\s@.]+$/;
  return emailRegex.test(email);
};

export function passwordValidator(password: string): boolean {
  const passwordRegex = /^[a-zA-Z0-9]{6,16}$/;
  const isPasswordValid = passwordRegex.test(password);
  return isPasswordValid;
}

interface CustomButtonProps {
  label: string;
  icon: string;
}

export const CustomButton = ({ label, icon }: CustomButtonProps) => {
  return (
    <Button
      variant="outlined"
      icon={icon}
      disabled
      text={
        <MyTypo
          color={`${theme.palette.textColor.highemp}`}
          variant="body1"
          label={label}
          sx={{ fontWeight: "600" }}
        />
      }
    />
  );
};

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  const formattedDate = `${parsedDate.getMonth() + 1}/${
    parsedDate.getDate() + 1
  }/${parsedDate.getFullYear()}`;
  return formattedDate;
};

export const formatDateOfBirth = (dob: string) => {
  const parsedDate = new Date(dob);
  const formattedDate = `${parsedDate.getFullYear()}-${(
    parsedDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;

  const today = new Date();
  const age = today.getFullYear() - parsedDate.getFullYear();

  return `${formattedDate} (${age})`;
};

export const formatCreatedDateOfcandidate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );

  return formattedDate;
};

export const TokenGen = (token: string) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const Container = styled(Grid)({
  width: "100%",
  height: "100vh",
  margin: "0px",
  padding: "20px",
  color: "black",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "minmax(238px, max-content) 1fr",
  gridTemplateRows: "minmax(65px, max-content) 1fr",
  gridTemplateAreas: `
    "sidebar header"
    "sidebar content"
 
  `,
});

export const NavigationBar = styled(Grid)(
  ({ sidebar }: { sidebar: React.ReactNode }) => ({
    gridArea: "sidebar",
    border: sidebar ? "none" : `1px solid ${theme.palette.grey[500]}`,
  })
);

export const Header = styled(Grid)(({ header }: { header: React.ReactNode }) => ({
  gridArea: "header",
  border: header ? "none" : `1px solid ${theme.palette.grey[500]}`,
}));

export const CandidateInfoContainer  = styled(Grid)({
  width: "100%",
  height: "100%",
  margin: "0px",
  padding: "20px",
  color: "black",
  display: "grid",
  gap: "20px",
  overflowY: "auto",
  gridTemplateColumns: "minmax(238px, max-content) 1fr",
  gridTemplateRows: "minmax(65px, max-content) 1fr",
  gridTemplateAreas: `
    "sidebar header"
    "sidebar content"
 
  `,
});

