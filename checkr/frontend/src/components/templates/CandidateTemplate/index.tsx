import { Grid, styled } from "@mui/material";
import React from "react";
import { Container, Header, NavigationBar } from "../../utils/functions";

export interface CandidateTemplateProps {
  sidebar?: React.ReactElement;
  header?: React.ReactElement;
  content?: React.ReactElement;
}


const ScrollableContent = styled(Grid)(
  ({ scrollableContent }: { scrollableContent: React.ReactNode }) => ({
    gridArea: "content",
    border: scrollableContent ? "none" : "1px solid grey",
    overflowX: "hidden", 
    overflowY: "auto",
    scrollbarWidth: "thin",

    width: "100%",
  })
);

const CandidateTemplate = ({
  sidebar,
  header,
  content,
}: CandidateTemplateProps) => {
  return (
    <Container>
      <NavigationBar sidebar={sidebar}>{sidebar ?? "Sidebar"}</NavigationBar>
      <Header header={header}>{header ?? "Header"}</Header>
      <ScrollableContent scrollableContent={content}>
        {content ?? "Content"}
      </ScrollableContent>
    </Container>
  );
};

export default CandidateTemplate;
