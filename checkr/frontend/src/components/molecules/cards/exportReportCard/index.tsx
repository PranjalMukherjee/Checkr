import { Card, Stack, Container, Modal } from "@mui/material";
import React from "react";
import MyTypo from "../../../atoms/Typography";
import theme from "../../../../theme/Theme";
import gif from "../../../../../public/assests/images/greenTick.gif";
interface ExportReportInterface {
  handleModalClose?: () => void;
}

const ExportReportCard = (props: ExportReportInterface) => {
  return (
    <Modal
      open={true}
      onClose={props.handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        marginTop: "12%",
      }}
    >
      <Container maxWidth="sm">
        <Card>
          <Stack
            spacing={1}
            justifyContent="center"
            alignItems="center"
            height={400}
          >
            <img
              data-testid="gif-element"
              src={gif}
              height={250}
              width={250}
              alt="Image not displayed"
            />
            <MyTypo
              color={`${theme.palette.textColor.highemp}`}
              label="Download link was sucessfully sent to your email"
              variant="heading2"
            />
          </Stack>
        </Card>
      </Container>
    </Modal>
  );
};

export default ExportReportCard;
