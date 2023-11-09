import React from "react";
import { Box, Stack, styled } from "@mui/material";
import IconButton from "../../atoms/IconButton";
import theme from "../../../theme/Theme";
import Typography from "../../atoms/Typography";
import { LOGOUT_SUBTEXT, LOGOUT_TEXT } from "../../../constants";

interface LogoutCardProps {
  handleCancel?: () => void;
  handleLogout?: () => void;
}



const Logout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "450px",
  height:"152px",
  boxShadow: "none",
  backgroundColor: theme.palette.textColor.white,
  borderRadius: theme.spacing(3),
  gap: "24px",
  padding: "16px",
});

const LogoutButton = styled(IconButton)({
  color: theme.palette.textColor.white,
  backgroundColor: theme.palette.primaryColor[500],
  Padding: "8px 16px 8px 16px",
  width: "4.938rem",
  height: "2.25rem",
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
});

const CancelButton = styled(IconButton)({
  color: theme.palette.textColor.medemp,
  borderColor: theme.palette.structural.stroke,
  backgroundColor: theme.palette.primaryColor[50],
  Padding: "8px 16px 8px 16px",
  width: "4.938rem",
  height: "2.25rem",
  "&:hover": {
    borderColor: theme.palette.structural.stroke,
    backgroundColor: theme.palette.primaryColor[50],
  },
});

const TypographyStack = styled(Stack)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "8px",
});

const ButtonStack = styled(Stack)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  marginTop: "auto",
  flexDirection:"row",
  gap: "8px",
});



export const LogoutCard = ({ handleCancel, handleLogout }: LogoutCardProps) => {
  return (
    <Logout>
      <TypographyStack>
        <Typography
          variant="subtitle1"
          color={`${theme.palette.textColor.highemp}`}
          label={LOGOUT_TEXT}
        />
        <Typography
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
          label={LOGOUT_SUBTEXT}
        />
      </TypographyStack>
      <ButtonStack>
        <CancelButton variant="outlined" text="Cancel" onClick={handleCancel} />

        <LogoutButton
          text="Logout"
          variant="contained"
          onClick={handleLogout}
        />
      </ButtonStack>
    </Logout>
  );
};
