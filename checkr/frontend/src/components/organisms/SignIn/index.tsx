import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Textfield from "../../molecules/TextfieldTypo";
import {
  Box,
  Stack,
  InputAdornment,
  styled,
  Card,
  Divider,
} from "@mui/material";
import theme from "../../../theme/Theme";
import Icon from "../../atoms/icon";
import Hide from "../../../../public/assests/images/Hide.svg";
import EYE from "../../../../public/assests/images/unhide.svg";
import Checkbox from "../../atoms/checkbox";
import IconButton from "../../atoms/IconButton";
import GoogleSignInCard from "../../molecules/cards/googleSignInCard";
import { SignInOrganism, SignUpOrganism } from "../../../constants";
import {
  TokenGen,
  isEmailValid,
  passwordValidator,
} from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { Token } from "../../utils/types";
import { getSignInToken } from "../../../services/user/getSignInToken";

interface SignInProps {
  onClickForgotPassword?: () => void;
  onClickSignUp?: () => void;
  onClickGoogleSignIn?: () => void;
}

const StyledCard = styled(Card)({
  backgroundColor: theme.palette.textColor.white,
  width: "480px",
  height: "auto",
  borderRadius: "6px",
  boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
  padding: "54px 48px",
  gap: "12px",
});

const SignInButton = styled(IconButton)({
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.primaryColor[500],
  color: theme.palette.structural.white,
  width: "100%",
  height: "2.75rem",
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
  ":disabled": {
    backgroundColor: `${theme.palette.primaryColor[400]}`,
    color: `${theme.palette.textColor.white}`,
  },
});

const CheckBoxStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
  flexDirection: "row",
});

const StyledStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  padding: "24px",
});

const StyledIconButton = styled(IconButton)({
  backgroundColor: theme.palette.structural.white,
  "&:hover": {
    backgroundColor: `${theme.palette.textColor.white}`,
  },
});

const EyeIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: `${theme.palette.textColor.white}`,
  },
});

const StyledTypography = styled(Typography)({
  marginTop: "-21px",
  marginLeft: "auto",
});

const ErrorStack = styled(Stack)({
  paddingTop:"4px",
  display:"flex",
  alignItems:"center"
})

const Signin = ({
  onClickForgotPassword,
  onClickSignUp,
  onClickGoogleSignIn,
}: SignInProps) => {
  const navigate = useNavigate();

  const [disable, setDisable] = useState<boolean>(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const requestData: Token = {
    email: email,
    password: password,
  };

  const fetchUser = async () => {
    try {
      const response = await getSignInToken(requestData);
      console.log(response);
      localStorage.setItem("token", response);
      const token = localStorage.getItem("token");
      TokenGen(`${token}`);
      navigate("/candidates");
    } catch (error: any) {
      setError("Unable to generate token");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    fetchUser();
  };

  useEffect(() => {
    const isEmailValidValue = isEmailValid(email);
    !isEmailValidValue && email != ""
      ? setValidEmail(true)
      : setValidEmail(false);
    const isPasswordValidValue = passwordValidator(password);
    !isPasswordValidValue && password != ""
      ? setValidPassword(true)
      : setValidPassword(false);
    setDisable(!(isEmailValidValue && isPasswordValidValue));
  }, [email, password]);

  return (
    <StyledCard>
      <Stack gap={"8px"}>
        <Typography
          label={SignInOrganism.headlabel}
          variant="heading1"
          color={`${theme.palette.textColor.highemp}`}
        />

        <Typography
          label={SignInOrganism.sublabel}
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
        />
      </Stack>
      <Stack paddingTop="24px" gap={"24px"}>
        <Textfield
          label={SignInOrganism.email}
          placeholder={SignInOrganism.emailplaceholder}
          color={`${theme.palette.textColor.highemp}`}
          variant="caption3"
          type={SignInOrganism.emailtype}
          width={"100%"}
          border="1px solid"
          height={"38px"}
          bcolor={theme.palette.structural.stroke}
          bgcolor={theme.palette.structural.white}
          value={email}
          bradius="4px"
          onChange={handleEmailChange}
        />
        {validEmail && (
          <StyledTypography
            variant="body2"
            color="red"
            label={SignUpOrganism.emailValidator}
          />
        )}
        <Textfield
          label={SignInOrganism.password}
          placeholder={SignInOrganism.passwordplaceholder}
          variant="caption3"
          color={`${theme.palette.textColor.highemp}`}
          type={showPassword ? "text" : "password"}
          height={"38px"}
          width={"100%"}
          border="1px solid"
          bcolor={theme.palette.structural.stroke}
          bgcolor={theme.palette.structural.white}
          value={password}
          endAdornment={
            <InputAdornment position="start">
              <EyeIconButton
                data-testid="eye-icon"
                variant="text"
                onClick={handleClickShowPassword}
                text={<Icon src={showPassword ? EYE : Hide} />}
              />
            </InputAdornment>
          }
          bradius="4px"
          onChange={handlePasswordChange}
        />
        {validPassword && (
          <StyledTypography
            variant="body2"
            color="red"
            label={SignUpOrganism.passwordValidator}
          />
        )}
      </Stack>
      <Stack gap={"20px"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <CheckBoxStack>
            <Checkbox
              checked={false}
              onChange={() => {}}
              sx={{ paddingLeft: "1px", paddingTop: "12px" }}
            />
            <Typography
              label={SignInOrganism.footerlabel}
              variant="body2"
              color={`${theme.palette.textColor.medemp}`}
            />
          </CheckBoxStack>
          <StyledIconButton
            variant="text"
            onClick={onClickForgotPassword}
            text={
              <Typography
                label={SignInOrganism.forgetpassword}
                variant="body1"
                color={`${theme.palette.primaryColor[500]}`}
              />
            }
          />
        </Box>

        <SignInButton
          variant="contained"
          onClick={handleSignIn}
          disabled={disable}
          text={SignInOrganism.headlabel}
        />
        {error && (
          <ErrorStack>
            <Typography
              variant="body2"
              color="red"
              label={SignInOrganism.userNotfound}
            />
          </ErrorStack>
        )}
      </Stack>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          padding: "24px 0px",
        }}
      >
        <Divider sx={{ flexGrow: 1 }} />
        <Typography
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
          label="or"
        />
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>

      <GoogleSignInCard onClickGoogleSignIn={onClickGoogleSignIn} />
      <StyledStack>
        <Typography
          color={`${theme.palette.textColor.medemp}`}
          variant="body2"
          label={SignInOrganism.noaccount}
        />
        <StyledIconButton
          variant="text"
          onClick={onClickSignUp}
          text={
            <Typography
              color={`${theme.palette.primaryColor[500]}`}
              variant="body1"
              label={SignInOrganism.signup}
            />
          }
        />
      </StyledStack>
    </StyledCard>
  );
};

export default Signin;
