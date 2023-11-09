import { Box, Divider, Stack, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme/Theme";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";
import CLOSE from "../../../../public/assests/images/Close.svg";
import ATTACHMENT from "../../../../public/assests/images/Attachment.svg";
import Icon from "../../atoms/icon";
import {
  ATTACHMENT_DATA,
  EMAIL_DATA,
  WARNINGS,
  EMAIL_DETAILS,
  TITLE,
} from "../../../constants";
import CustomMyTypo from "../../utils/functions";

interface NoticecardProps {
  preAdverAction: string[];
  handleClose?: () => void;
  handleSubmit?: () => void;
}

const OuterBox = styled(Box)({
  backgroundColor: theme.palette.textColor.white,
  width: "43.5rem",
  height: "auto",
  borderRadius: "6px",
});

const Header = styled(Stack)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
});

const Warinigs = styled(Stack)({
  backgroundColor: theme.palette.accentColor.lightRed,
  borderRadius: "4px",
  height: "auto",
  width: "36.5rem",
});

const Attachment = styled(Stack)({
  gap: 1,
  display: "flex",
  alignItems: "center",
});

const Submit = styled(IconButton)({
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.primaryColor[500],
  color: theme.palette.structural.white,
  width: "7.938rem",
  height: "2.25rem",
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
});

const Close = styled(IconButton)({
  "&:hover": {
    backgroundColor: theme.palette.textColor.white,
  },
});

export const NoticeCard = ({
  preAdverAction,
  handleClose,
  handleSubmit,
}: NoticecardProps) => {
  return (
    <OuterBox>
      <Header direction={"row"}>
        <Typography
          label={TITLE}
          variant="subtitle1"
          color={`${theme.palette.textColor.highemp}`}
          sx={{fontWeight:"bold"}}
        />
        <Close
          data-testid="close-button"
          variant="text"
          icon={CLOSE}
          onClick={handleClose}
        />
      </Header>

      <Divider />

      <Stack padding={"16px"} gap={"20px"}>
        <Stack gap={"16px"}>
          <Stack gap={"12px"}>
            {EMAIL_DATA.map((item) => (
              <Stack direction={"row"} gap={"4px"} key={item.id}>
                <Typography
                  variant="caption3"
                  color={`${theme.palette.textColor.highemp}`}
                  sx={{ fontWeight: "bold" }}
                  label={item.label}
                />

                <Typography
                  variant="caption3"
                  color={`${theme.palette.textColor.medemp}`}
                  label={item.email ?? item.subject}
                />
              </Stack>
            ))}
          </Stack>

          <Warinigs>
            <ul
              style={{
                color: theme.palette.accentColor.red,
                margin: "8px",
                padding: "0px 26px",
              }}
            >
              {WARNINGS.map((warning) => (
                <li key={warning.id}>
                  <Typography
                    variant="caption"
                    color={`${theme.palette.accentColor.red}`}
                    label={warning.message}
                  />
                </li>
              ))}
            </ul>
          </Warinigs>
        </Stack>

        <Stack gap={"12px"}>
          <CustomMyTypo label={EMAIL_DETAILS.name} />
          <CustomMyTypo label={EMAIL_DETAILS.content} />
          <ul
            style={{
              color: theme.palette.textColor.medemp,
              margin: "0px",
              paddingLeft: "24px",
            }}
          >
            {preAdverAction.map((action, index) => (
              <li key={`action-${index}`}>
                <CustomMyTypo label={action} />
              </li>
            ))}
          </ul>
          <CustomMyTypo label={EMAIL_DETAILS.ending} />
          <Stack>
            <CustomMyTypo label={EMAIL_DETAILS.sincerly} />
            <CustomMyTypo label={EMAIL_DETAILS.sender} />
          </Stack>
        </Stack>
        <Stack gap={"8px"}>
          <Typography
            variant="caption3"
            color={`${theme.palette.textColor.highemp}`}
            sx={{ fontWeight: "bold" }}
            label="Attachments"
          />
          {ATTACHMENT_DATA.map((item, index) => (
            <Attachment key={`item-${index}`} direction="row">
              <Icon
                src={ATTACHMENT}
                alt="attachment"
                width="24px"
                height="24px"
              />
              <CustomMyTypo label={item} />
            </Attachment>
          ))}
        </Stack>
      </Stack>

      <Divider />

      <Stack
        sx={{
          display: "flex",
          alignItems: "flex-end",
          padding: "16px",
        }}
      >
        <Submit
          variant="contained"
          text="Submit Notice"
          onClick={handleSubmit}
        />
      </Stack>
    </OuterBox>
  );
};
