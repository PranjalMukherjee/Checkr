import { Card, Stack, Container } from "@mui/material";
import React from "react";
import gif from "../../../../../public/assests/images/greenTick.gif";
import MyTypo from "../../../atoms/Typography";
import theme from "../../../../theme/Theme";

interface TickCardProps {
  label?: string;
}

const TickCard = ({ label }: TickCardProps) => {
  return (
    <Container maxWidth="sm">
      <Card>
        <Stack
          spacing={5}
          justifyContent="center"
          alignItems="center"
          height={350}
        >
          <img data-testid="gif-element" src={gif} height={200} width={200} alt="Image not displayed" />
          <MyTypo
            color={`${theme.palette.textColor.highemp}`}
            label={label}
            variant="heading1"
          />
        </Stack>
      </Card>
    </Container>
  );
};

export default TickCard;
