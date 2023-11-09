import React from "react";
import CandidateInfoTemplate from "../../templates/CandidateInfo";
import { PreAdverseActionNotice } from "../../organisms/PreAdverseAction";
import { Box } from "@mui/material";
import BACK from "../../../../public/assests/images/Back.svg";
import Icon from "../../atoms/icon";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/Theme";
import styled from "@emotion/styled";
import Sidebar from "../../molecules/Sidebar";
import IconButton from "../../atoms/IconButton";
import { useNavigate } from "react-router-dom";

const HeaderInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});

const Typo = styled(TypographyComponent)({
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "30px",
  marginRight: "150px",
});

const PreAdversePage = () => {
  const navigate = useNavigate();

  return (
    <CandidateInfoTemplate
      leftnavbar={<Sidebar />}
      body={<PreAdverseActionNotice />}
      header={
        <HeaderInfo>
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
            variant="text"
            text={<Icon src={BACK} alt="Back" />}
            sx={{
              "&:hover": {
                backgroundColor: "#F7F8FA",
              },
            }}
          />
          <Typo
            color={`${theme.palette.textColor.highemp}`}
            label="Pre-Adverse Action Notice"
            variant="body1"
          />
        </HeaderInfo>
      }
    />
  );
};

export default PreAdversePage;