import React, { useState } from "react";
import { Box, Divider, Stack, styled, Modal } from "@mui/material";
import theme from "../../../theme/Theme";
import Typography from "../../atoms/Typography";
import {
  EMAIL_DATA,
  EMAIL_DETAILS,
  PreAdverseActionNoticeData,
  PRE_ADVERSE_MESSAGE,
} from "../../../constants";
import Checkbox from "../../atoms/checkbox";
import IconButton from "../../atoms/IconButton";
import { NoticeCard } from "../../molecules/notice";
import TickCard from "../../molecules/cards/GreentickCard";
import { useNavigate, useParams } from "react-router-dom";
import { updateCandidateAdjudication } from "../../../services/reports/updateCandidate";

const StyledOuterBox = styled(Box)({
  display: "flex",
  backgroundColor: theme.palette.textColor.white,
  width: "100%",
  height: "817px",
  flexDirection: "column",
  borderRadius: "0.75rem",
  boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
});

const BottomBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.625rem 1.25rem",
  marginTop: "7%",
});

const StyledBottomNoticeBoxContent = styled(Stack)({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  flexDirection: "row",
});

const PreAdverseActionStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  paddingLeft: "0.625rem",
  marginTop: "0.25%",
});

const EmailDataStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "0.25rem",
  margin: "1.75rem 1.25rem 1.125rem 1.25rem",
});

const DaysBox = styled(Box)({
  width: "2.625rem",
  height: "1.5rem",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem 0.5rem 1rem",
  border: `1px solid ${theme.palette.structural.stroke}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PreviewButton = styled(IconButton)({
  height: "2.25rem",
  width: "8.313rem",
  backgroundColor: theme.palette.primaryColor[500],
  color: theme.palette.structural.white,
  "&:hover": {
    backgroundColor: theme.palette.primaryColor[500],
  },
  ":disabled": {
    backgroundColor: `${theme.palette.primaryColor[400]}`,
    color: `${theme.palette.textColor.white}`,
  },
});

const NoticeBox = styled(Box)({
  width: "100%",
  maxWidth: "600px",
  transform: "scale(1, 1)",
  transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  "&:focus": {
    outline: "none",
  },
  "& .MuiPaper-root": {
    height: "100%",
  },
});

export const PreAdverseActionNotice = () => {
  const navigate = useNavigate();
  const { candidateId } = useParams();

  const [error, setError] = useState<boolean>(false);

  const [selectedCharges, setSelectedCharges] = useState<string[]>([]);

  ///////////////////////////////////////////////////////
  const [modal, setModal] = useState(false);
  const [modalTick, setModalTick] = useState(false);

  const [open, setOpen] = useState<boolean>(false);
  const [openTick, setOpenTick] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
    setOpen(true);
  };
  const toggleModalTick = async () => {
    try {
      await updateCandidateAdjudication(candidateId!, "ADVERSE_ACTION","CONSIDER");
    } catch (error) {
      setError(true);
      console.error(error);
    }

    setModal(false);

    setTimeout(() => {
      setModalTick(!modalTick);
      navigate("/candidates");
    }, 2000);
    setOpenTick(true);
  };

  const handleCheckboxChange = (charge: string) => {
    if (selectedCharges.includes(charge)) {
      setSelectedCharges(selectedCharges.filter((c) => c !== charge));
    } else {
      setSelectedCharges([...selectedCharges, charge]);
    }
  };

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <StyledOuterBox>
      <Stack>
        {EMAIL_DATA.map((item) => (
          <Stack key={item.id}>
            <EmailDataStack key={item.id}>
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
            </EmailDataStack>
            <Divider />
          </Stack>
        ))}
      </Stack>

      <Stack
        padding={"1.25rem 1.25rem 1.5rem 1.25rem"}
        gap={"0.625rem"}
        width={"48.875rem"}
      >
        <Typography
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
          label={EMAIL_DETAILS.name}
        />
        <Typography
          variant="body2"
          color={`${theme.palette.textColor.medemp}`}
          label={PreAdverseActionNoticeData.EMAIL_BODY}
        />
      </Stack>

      <Stack>
        <Typography
          variant="caption3"
          color={`${theme.palette.textColor.highemp}`}
          label={PreAdverseActionNoticeData.SELECT_HELPERTEXT}
          sx={{
            fontWeight: "bold",
            paddingLeft: "20px",
          }}
        />
        <Stack>
          {PreAdverseActionNoticeData.PPE_ADVERSE_ACTIONS.map((item: any) => (
            <PreAdverseActionStack key={item.id}>
              <Checkbox onChange={() => handleCheckboxChange(item.action)} />
              <Typography
                variant="caption"
                color={`${theme.palette.textColor.medemp}`}
                label={item.action}
              />
            </PreAdverseActionStack>
          ))}
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "41.25rem",
          padding: "1.25rem",
          gap: "1rem",
        }}
      >
        <Typography
          variant="caption"
          color={`${theme.palette.textColor.medemp}`}
          label={PreAdverseActionNoticeData.EMAIL_ENDING_MESSAGE}
        />
        <Stack>
          <Typography
            variant="caption"
            color={`${theme.palette.textColor.medemp}`}
            label={PreAdverseActionNoticeData.EMAIL_ENDING_1}
          />
          <Typography
            variant="caption"
            color={`${theme.palette.textColor.medemp}`}
            label={PreAdverseActionNoticeData.EMAIL_ENDING_2}
          />
        </Stack>
      </Stack>

      <Divider />

      <BottomBox>
        <StyledBottomNoticeBoxContent>
          <Typography
            variant="body2"
            color={`${theme.palette.textColor.medemp}`}
            label={PreAdverseActionNoticeData.FOOTER_TEXT}
          />
          <DaysBox>
            <Typography
              variant="body1"
              color={`${theme.palette.textColor.highemp}`}
              label="7"
            />
          </DaysBox>
          <Typography
            variant="body2"
            color={`${theme.palette.textColor.medemp}`}
            label="Days"
          />
        </StyledBottomNoticeBoxContent>
        <PreviewButton
          variant="contained"
          text={PreAdverseActionNoticeData.PREVIEW_NOTICE_BUTTON}
          disabled={selectedCharges.length === 0}
          onClick={toggleModal}
        />
        {modal ? (
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              margin: "5%",
            }}
          >
            <NoticeBox>
              <NoticeCard
                handleClose={toggleModal}
                preAdverAction={selectedCharges}
                handleSubmit={toggleModalTick}
              />
            </NoticeBox>
          </Modal>
        ) : (
          <></>
        )}
        {openTick ? (
          <Modal
            open={openTick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              margin: "15%",
              height: "auto",
            }}
          >
            <TickCard label={PRE_ADVERSE_MESSAGE} />
          </Modal>
        ) : (
          <> </>
        )}
      </BottomBox>
    </StyledOuterBox>
  );
};