import React from "react";
import AdverseActionsTable from "../../organisms/adverseActions";
import CandidateTemplate from "../../templates/CandidateTemplate";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/Theme";
import Sidebar from "../../molecules/Sidebar";
import { Stack } from "@mui/material";

const AdverseActionsPage = () => {
  return (
      <CandidateTemplate
      sidebar={<Sidebar highlight="adverse-actions"/>}
        header={
          <Stack sx={{
            marginTop: "30px",
            marginLeft : "25px"

          }}>
          <TypographyComponent
            color={`${theme.palette.textColor.highemp}`}
            label="Adverse Actions"
            variant="caption3"
            sx={{
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "30px",
            }}
          />
          </Stack>
        }
        content={<AdverseActionsTable isCandidateFilter={false} />}
      />
  );
};

export default AdverseActionsPage;
