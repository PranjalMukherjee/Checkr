import Google from "../../../../../public/assests/images/Google.svg";
import Github from "../../../../../public/assests/images/Github.svg";
import React from "react";
import theme from "../../../../theme/Theme";
import { Stack, styled } from "@mui/material";
import IconButton from "../../../atoms/IconButton";


interface GoogleSignInCardProps {
  onClickGoogleSignIn?:()=>void
}
const StyledIconButton = styled(IconButton)({
  backgroundColor: theme.palette.structural.white,
  color: theme.palette.textColor.highemp,
  borderColor: theme.palette.structural.stroke,
  width: "480px",
  height: "48px",
  "&:hover": {
    borderColor: theme.palette.structural.stroke,
    backgroundColor: theme.palette.textColor.white,
  },
});

const GoogleSignInCard = ({onClickGoogleSignIn}:GoogleSignInCardProps) => {
  return (
    <>
      <Stack spacing={3}>
        <StyledIconButton
          data-testid="google-element"
          text="Sign in with Google"
          variant="outlined"
          icon={Google}
          onClick={onClickGoogleSignIn}
        />
        <StyledIconButton
          data-testid="github-element"
          text="Sign in with GitHub"
          variant="outlined"
          icon={Github}
        />
      </Stack>
    </>
  );
};

export default GoogleSignInCard;
