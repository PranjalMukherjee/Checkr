import React, { useState } from "react";
import { Card, Modal, Stack, styled } from "@mui/material";
import theme from "../../../theme/Theme";
import IconButton from "../../atoms/IconButton";
import BACK from "../../../../public/assests/images/BackArrow.svg";
import Typography from "../../atoms/Typography";
import TextFieldTypo from "../../molecules/TextfieldTypo";
import {
  CONTINUE,
  EMAIL_PLACEHOLDER,
  ENTER_OTP,
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUBTEXT,
  OTP_PAGE_RESEND_TEXT,
  OTP_PAGE_SUBTEXT,
  OTP_SUCCESSFULL_MESSAGE,
  RESEND,
  RESET_PASSWORD,
} from "../../../constants";
import OtpInput from "react-otp-input";
import TickCard from "../../molecules/cards/GreentickCard";
import { generateOTP } from "../../utils/functions";
import { useNavigate } from "react-router-dom";


interface ForgetPasswordCardProps {
  onClickContinueButton?:()=>void
}

const StyledCard = styled(Card)({
  backgroundColor: theme.palette.textColor.white,
  width: "30rem",
  height: "42rem",
  borderRadius: "6px",
  boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
  padding: "26px 45px",
  gap: "12px",
});

const BackButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: theme.palette.textColor.white,
  },
});

const ResetContinueButton = styled(IconButton)({
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.primaryColor[500],
  color: theme.palette.structural.white,
  height: "2.75rem",
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
  ":disabled": {
    backgroundColor: `${theme.palette.primaryColor[400]}`,
    color: `${theme.palette.textColor.white}`,
  },
});

export const ForgetPassword = ({onClickContinueButton}:ForgetPasswordCardProps) => {

  const navigate = useNavigate();

  const [resetButtonDisable, setResetButtonDisable] = useState<boolean>(true);
  const [continueButtonDisable, setContinueButtonDisable] = useState<boolean>(true);

  const [otpPage, setOtpPage] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [otpFilled, setOtpFilled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isValidEmail =
      inputValue.endsWith("@gmail.com") ||
      inputValue.endsWith("@zemosolabs.com");
    setResetButtonDisable(!isValidEmail);
  };

  const handleResetPasswordButton = () => {
      const newOtp = generateOTP();
      setOtp(newOtp);
      setOpen(true);
      setTimeout(() => {
        setOtpPage(true);
      }, 2000);
    
  };

  const handleBackButton = () => {
    if(!otpPage){
      navigate("/");
    }
  };

  const handleOtpChange = () => {
    setOtpFilled(true);
    setContinueButtonDisable(false);
  };

  return (
    <StyledCard>
      <BackButton
        variant="text"
        text={
          <Typography
            variant="caption3"
            color={`${theme.palette.primaryColor[500]}`}
            label="Go Back"
          ></Typography>
        }
        icon={BACK}
        onClick={handleBackButton}
      />
      <Stack gap={"24px"} padding={"0px 4px"}>
        <Stack gap={"6px"}>
          <Typography
            variant="heading1"
            color={`${theme.palette.textColor.highemp}`}
            label={otpPage ? ENTER_OTP : FORGET_PASSWORD}
          ></Typography>
          <Typography
            variant="body2"
            color={`${theme.palette.textColor.medemp}`}
            label={otpPage ? OTP_PAGE_SUBTEXT : FORGET_PASSWORD_SUBTEXT}
          ></Typography>
        </Stack>

        {otpPage ? (
          <OtpInput
            data-testid="otp-field"
            value={otpFilled ? otp : ""}
            onChange={handleOtpChange}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            containerStyle={{
              display: "flex",
              justifyContent: "space-between",
            }}
            inputStyle={{
              width: "5.234rem",
              height: "2.25rem",
              fontSize: "24px",
              border: "1px solid",
              borderColor: theme.palette.structural.stroke,
              color: theme.palette.textColor.highemp,
            }}
          />
        ) : (
          <TextFieldTypo
            label="Email"
            height="38px"
            width="29.35rem"
            color={`${theme.palette.textColor.medemp}`}
            variant="caption3"
            placeholder={EMAIL_PLACEHOLDER}
            type="text"
            border="1px solid"
            bcolor={`${theme.palette.structural.stroke}`}
            bradius="4px"
            bgcolor={`${theme.palette.structural.white}`}
            onChange={handleInputChange}
          />
        )}

        <ResetContinueButton
          variant="contained"
          text={
            <Typography
              variant="body1"
              color={`${theme.palette.textColor.white}`}
              label={otpPage ? CONTINUE : RESET_PASSWORD}
            />
          }
          disabled={otpPage ? continueButtonDisable : resetButtonDisable}
          onClick={otpPage ? onClickContinueButton : handleResetPasswordButton}
        />

        {otpPage ? (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Typography
              variant="body1"
              color={`${theme.palette.textColor.medemp}`}
              label={OTP_PAGE_RESEND_TEXT}
            />
            <Typography
              variant="body2"
              color={`${theme.palette.primaryColor[500]}`}
              label={RESEND}
            />
          </Stack>
        ) : (
          <Modal
            open={open}
            data-testid="forgotpassword-modal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              margin: "15%",
            }}
          >
            <TickCard label={OTP_SUCCESSFULL_MESSAGE} />
          </Modal>
        )}
      </Stack>
    </StyledCard>
  );
};
