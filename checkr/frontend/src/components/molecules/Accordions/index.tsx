import React from "react";
import styled from "styled-components";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
} from "@mui/material";
import { CandidateInformation } from "../../../constants";
import InformationCard from "../infoCard";
import ArrowDown from "../../../../public/assests/images/Arrow_Down.svg";
import Icon from "../../atoms/icon";
import Typography from "../../atoms/Typography";
import theme from "../../../theme/Theme";

const CardGrid = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  gap: "16px",
  padding: "16px 0px",
});
const StyledAccordion = styled(MuiAccordion)`
  width: 99%;
  border-radius: 8px;
  box-shadow: 0px 4px 28px rgba(45, 45, 47, 0.1);
  background-color: ${theme.palette.textColor.white};
  padding: 8px;
  font-family: ${theme.typography.fontFamily};
`;
interface AccordionCardsProps {
  title?: string;
  cardData: CandidateInformation[];
}

const AccordionCards = ({ title, cardData }: AccordionCardsProps) => {
  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<Icon src={ArrowDown} />}>
        <Typography
          variant="subtitle1"
          color={`${theme.palette.textColor.highemp}`}
          label={title}
          sx={{ fontWeight: "bold" }}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <CardGrid>
          {cardData.map((item) => (
            <InformationCard
              key={item.id}
              title={item.title}
              text ={ item.text ?? "-"}
              src={item.icon}
            />
          ))}
        </CardGrid>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default AccordionCards;
