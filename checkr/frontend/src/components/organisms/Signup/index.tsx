import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Textfield from "../../molecules/TextfieldTypo";
import { Box, Stack, InputAdornment, Card, styled } from "@mui/material";
import theme from "../../../theme/Theme";
import Icon from "../../atoms/icon";
import Hide from "../../../../public/assests/images/Hide.svg";
import Checkbox from "../../atoms/checkbox";
import IconButton from "../../atoms/IconButton";
import { SignUpOrganism } from "../../../constants";
import EYE from "../../../../public/assests/images/unhide.svg";
import { isEmailValid, passwordValidator } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { Token } from "../../utils/types";
import { postUser } from "../../../services/user/postUser";
export interface SignUpProps {
  revertSignInButton?: () => void;
}
const StyledCard = styled(Card)({
  backgroundColor: theme.palette.textColor.white,
  width: "400px",
  height: "572px",
  borderRadius: "6px",
  boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
  padding: "54px 48px",
  gap: "12px",
});
const EyeIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: `${theme.palette.textColor.white}`,
  },
});
const SignUpButton = styled(IconButton)({
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.primaryColor[500],
  color: theme.palette.structural.white,
  width: "384px",
  height: "44px",
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
  ":disabled": {
    backgroundColor: `${theme.palette.primaryColor[400]}`,
    color: `${theme.palette.textColor.white}`,
  },
});
const StyledTypography = styled(Typography)({
  marginTop: "-21px",
  marginLeft: "auto",
});

const Signup = (props: SignUpProps) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [check, setcheck] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validConfirmPassword, setValidConfirmPassword] =
    useState<boolean>(false);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show);
  };

  const requestData: Token = {
    email: email,
    password: password,
  };
  const fetchUser = async () => {
    try {
      await postUser(requestData);
      navigate("/");
    } catch (error: any) {
    }
  };

  const handleSignUp = () => {
    fetchUser();
  };

  useEffect(() => {
    const emailValidation = isEmailValid(email);
    !emailValidation && email != ""
      ? setValidEmail(true)
      : setValidEmail(false);
    const passwordValidation = passwordValidator(password);
    !passwordValidation && password != ""
      ? setValidPassword(true)
      : setValidPassword(false);
    if (password !== confirmPassword && confirmPassword != "") {
      setValidConfirmPassword(true);
    } else {
      setValidConfirmPassword(false);
    }
    if (emailValidation && passwordValidation && password === confirmPassword) {
      setcheck(true);
      setDisable(false);
    } else {
      setcheck(false);
      setDisable(true);
    }
  }, [email, password, confirmPassword]);
  return (
    <StyledCard>
      <Stack gap={"8px"}>
        <Typography
          label={SignUpOrganism.headlabel}
          variant="heading1"
          color={`${theme.palette.textColor.highemp}`}
        />

        <Typography
          label={SignUpOrganism.sublabel}
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
        />
      </Stack>

      <Stack paddingTop="24px" gap={"24px"}>
        <Textfield
          label={SignUpOrganism.email}
          placeholder={SignUpOrganism.emailplaceholder}
          variant="caption3"
          color={`${theme.palette.textColor.medemp}`}
          type={SignUpOrganism.emailtype}
          height="36px"
          width="384px"
          border="1px solid"
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
          label={SignUpOrganism.password}
          placeholder={SignUpOrganism.passwordplaceholder}
          variant="caption3"
          color={`${theme.palette.textColor.medemp}`}
          type={showPassword ? "text" : "password"}
          height="36px"
          width="384px"
          border="1px solid"
          bcolor={theme.palette.structural.stroke}
          bgcolor={theme.palette.structural.white}
          value={password}
          endAdornment={
            <InputAdornment position="start">
              <EyeIconButton
                data-testid="eye-icon1"
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
        <Textfield
          label={SignUpOrganism.confirmpassword}
          placeholder={SignUpOrganism.passwordplaceholder}
          variant="caption3"
          color={`${theme.palette.textColor.medemp}`}
          type={showConfirmPassword ? "text" : "password"}
          height="36px"
          width="384px"
          border="1px solid"
          bcolor={theme.palette.structural.stroke}
          bgcolor={theme.palette.structural.white}
          value={confirmPassword}
          endAdornment={
            <InputAdornment position="start">
              <EyeIconButton
                data-testid="eye-icon2"
                variant="text"
                onClick={handleClickShowConfirmPassword}
                text={<Icon src={showConfirmPassword ? EYE : Hide} />}
              />
            </InputAdornment>
          }
          bradius="4px"
          onChange={handleConfirmPasswordChange}
        />
        {validConfirmPassword && (
          <StyledTypography
            variant="body2"
            color="red"
            label={SignUpOrganism.confirmPasswordValidator}
          />
        )}
      </Stack>

      <Stack gap={"10px"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBlock: "10px",
          }}
        >
          <Checkbox
            checked={check}
            onChange={() => {}}
            sx={{ paddingLeft: "1px", paddingTop: "12px" }}
          />
          <Typography
            label={SignUpOrganism.check}
            variant="body2"
            color={`${theme.palette.textColor.medemp}`}
          />

          <Typography
            label={SignUpOrganism.privacypolicy}
            variant="body2"
            color={`${theme.palette.primaryColor[500]}`}
            sx={{ marginLeft: "7px" }}
          />
        </Box>
        <Box
          component="div"
          style={{
            marginBottom: "25px",
          }}
        >
          <SignUpButton
            variant="contained"
            onClick={handleSignUp}
            text={SignUpOrganism.headlabel}
            disabled={disable}
          />
        </Box>
      </Stack>
      <Box
        component="span"
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "110px",
          gap: "0px",
        }}
      >
        <Typography
          color={`${theme.palette.textColor.medemp}`}
          variant="body2"
          label={SignUpOrganism.existingaccount}
        />
        <IconButton
          variant="text"
          onClick={props.revertSignInButton}
          text={
            <Typography
              color={`${theme.palette.primaryColor[500]}`}
              variant="body1"
              label={SignUpOrganism.signin}
            />
          }
        />
      </Box>
    </StyledCard>
  );
};

export default Signup;

