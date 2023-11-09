import * as React from "react";
import { Card, Box, styled, Stack } from "@mui/material";
import Typography from "../../atoms/Typography";
import MuiIcon from "../../atoms/icon";
import theme from "../../../theme/Theme";

export interface Cards {
  title?: string;
  text?: string;
  src?: string;
}

const StyledCard = styled(Card)({
  display: "flex",
  alignItems:"center",
  flexDirection: "row",
  width: "90%",
  boxShadow: "none",
  backgroundColor: theme.palette.primaryColor[50],
  border: `1px solid ${theme.palette.structural.stroke}`,
  borderRadius: "12px",
  gap: "12px",
  padding:"12px",
});

const StyledBox = styled(Box)({
  background: "white",
  height: "2.75rem",
  width: "2.75rem",
  borderRadius: "12px",
  border: `1px solid ${theme.palette.structural.stroke}`,
  display: "flex",
  justifyContent: "center",
  alignItems:"center"
});
const InformationCard = (props: Cards) => {
  const { src, title, text } = props;
  return (
    <StyledCard>
      <StyledBox>
        <MuiIcon src={src} height="24px" width="24px"/>
      </StyledBox>
      <Stack gap={"6px"}>
        <Typography
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
          label={title}
        />

        <Typography
          variant="body1"
          color={`${theme.palette.textColor.highemp}`}
          label={text}
          sx={{
            fontWeight:"bold"
          }}
        />
      </Stack>
    </StyledCard>
  );
};
export default InformationCard;
