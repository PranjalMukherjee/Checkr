import { Grid, styled } from "@mui/material";
import React from "react";
import { CandidateInfoContainer, Header, NavigationBar } from "../../utils/functions";

export interface CandidateInfoTemplateProps {
  leftnavbar?: React.ReactElement;
  header?: React.ReactElement;
  body?: React.ReactElement;
}

const StyledContent = styled(Grid)(
  ({ scrollableContent }: { scrollableContent: React.ReactNode }) => ({
    gridArea: "content",
    border: scrollableContent ? "none" : "1px solid grey",
    overflowX: "hidden", 
    overflowY: "hidden",
    scrollbarWidth: "thin",

    width: "100%",
  })
);

const CandidateInfoTemplate = ({
  leftnavbar,
  header,
  body,
}: CandidateInfoTemplateProps) => {
  return (
    <CandidateInfoContainer>
      <NavigationBar sidebar={leftnavbar}>{leftnavbar ?? "leftnavbar"}</NavigationBar>
      <Header header={header}>{header ?? "Header"}</Header>
      <StyledContent scrollableContent={body}>
        {body ?? "Body"}
      </StyledContent>
    </CandidateInfoContainer>
  );
};

export default CandidateInfoTemplate;
