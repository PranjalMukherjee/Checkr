import React, { useEffect, useState } from "react";
import AccordionCards from "../../molecules/Accordions";
import {
  candidateInfo,
  candidateInitialState,
  reportInfo,
  reportInitialState,
} from "../../../constants";
import CourtSearchesTable from "../../organisms/courtSearchesTable";
import { Stack, styled } from "@mui/material";
import Sidebar from "../../molecules/Sidebar";
import CandidateInfoTemplate from "../../templates/CandidateInfo";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";
import BACK from "../../../../public/assests/images/Back.svg";
import theme from "../../../theme/Theme";
import Icon from "../../atoms/icon";
import { ReportInfo, candidate } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";
import { retrieveCandidateById } from "../../../services/candidates/getCandidateById";
import { retriveReportById } from "../../../services/reports/getReportById";
import { updateCandidateAdjudication } from "../../../services/reports/updateCandidate";
import { formatCreatedDateOfcandidate, formatDateOfBirth } from "../../utils/functions";

const PreAdverActionButton = styled(IconButton)({
  height: "40px",
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.textColor.white,
  color: theme.palette.structural.white,
  borderColor: theme.palette.structural.stroke,
  "&:hover": {
    backgroundColor: theme.palette.textColor.white,
    borderColor: theme.palette.structural.stroke,
  },
});

const EngageButton = styled(IconButton)({
  height: "36px",
  width: "83px",
  padding: "8px 16px 8px 16px",
  backgroundColor: theme.palette.primaryColor[500],
  color: theme.palette.structural.white,
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
});

const InnerStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const OuterStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "24px",
});

export const CandidateInfoPage = () => {
  const navigate = useNavigate();
  const { candidateId } = useParams();

  const [data, setData] = useState<candidate>(candidateInitialState);
  const [reportData, setReportData] = useState<ReportInfo>(reportInitialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [putError, setPutError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const candidate = await retrieveCandidateById(candidateId!);
      setData(candidate);
      const report = await retriveReportById(candidateId!);
      setReportData(report);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleEngageButton = async () => {
    try {
      await updateCandidateAdjudication(candidateId!,"ENGAGE","CLEAR");
      navigate("/candidates");
    } catch (error) {
      setPutError(true);
      console.error("Error updating candidate adjudication:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CandidateInfoTemplate
      header={
        <OuterStack>
          <InnerStack>
            <IconButton
              onClick={() => {
                navigate("/candidates");
              }}
              variant="text"
              text={<Icon src={BACK} alt="Back" />}
            />
            <Typography
              variant="heading1"
              color={`${theme.palette.textColor.highemp}`}
              label={data.name}
              sx={{fontWeight:"bold"}}

            />
          </InnerStack>
          <InnerStack gap={"12px"}>
            <PreAdverActionButton
              onClick={() => {
                navigate(`/preadverse/${candidateId}`);
              }}
              variant="outlined"
              text={
                <Typography
                  variant="body1"
                  color={`${theme.palette.textColor.medemp}`}
                  label="Pre-Adverse Action"
                />
              }
            />
            <EngageButton
              onClick={handleEngageButton}
              variant="contained"
              text={
                <Typography
                  variant="body1"
                  color={`${theme.palette.structural.white}`}
                  label="Engage"
                />
              }
            />
          </InnerStack>
        </OuterStack>
      }
      leftnavbar={<Sidebar />}
      body={
        error || putError ? (
          <div>Error...</div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          <Stack gap={"24px"}>
            <AccordionCards
              title="Candidate Information"
              cardData={[
                {
                  id: candidateInfo[0].id,
                  title: candidateInfo[0].title,
                  text: data.name,
                  icon: candidateInfo[0].icon,
                },
                {
                  id: candidateInfo[1].id,
                  title: candidateInfo[1].title,
                  text: data.email,
                  icon: candidateInfo[1].icon,
                },
                {
                  id: candidateInfo[2].id,
                  title: candidateInfo[2].title,
                  text: formatDateOfBirth(data.dob),
                  icon: candidateInfo[2].icon,
                },
                {
                  id: candidateInfo[3].id,
                  title: candidateInfo[3].title,
                  text: data.phone_no,
                  icon: candidateInfo[3].icon,
                },
                {
                  id: candidateInfo[4].id,
                  title: candidateInfo[4].title,
                  text: data.zipcode,
                  icon: candidateInfo[4].icon,
                },
                {
                  id: candidateInfo[5].id,
                  title: candidateInfo[5].title,
                  text: data.social_security,
                  icon: candidateInfo[5].icon,
                },
                {
                  id: candidateInfo[6].id,
                  title: candidateInfo[6].title,
                  text: data.driver_license,
                  icon: candidateInfo[6].icon,
                },
                {
                  id: candidateInfo[7].id,
                  title: candidateInfo[7].title,
                  text: formatCreatedDateOfcandidate(data.created_at),
                  icon: candidateInfo[7].icon,
                },
              ]}
            />
            <Stack>
            <AccordionCards
              title="Report Information"
              cardData={[
                {
                  id: reportInfo[0].id,
                  title: reportInfo[0].title,
                  text: reportData.status,
                  icon: reportInfo[0].icon,
                },
                {
                  id: reportInfo[1].id,
                  title: reportInfo[1].title,
                  text: reportData.adjudication === "ADVERSE_ACTION" ? "ADVERSE ACTION" : reportData.adjudication,
                  icon: reportInfo[1].icon,
                },
                {
                  id: reportInfo[2].id,
                  title: reportInfo[2].title,
                  text: reportData.packageName,
                  icon: reportInfo[2].icon,
                },
                {
                  id: reportInfo[3].id,
                  title: reportInfo[3].title,
                  text: formatCreatedDateOfcandidate(reportData.createdAt),
                  icon: reportInfo[3].icon,
                },
                {
                  id: reportInfo[4].id,
                  title: reportInfo[4].title,
                  text: formatCreatedDateOfcandidate(reportData.completedDate),
                  icon: reportInfo[4].icon,
                },
                {
                  id: reportInfo[5].id,
                  title: reportInfo[5].title,
                  text: reportData.turnAroundTime,
                  icon: reportInfo[5].icon,
                },
              ]}
            />
            </Stack>
            <CourtSearchesTable />
          </Stack>
        )
      }
    />
  );
};