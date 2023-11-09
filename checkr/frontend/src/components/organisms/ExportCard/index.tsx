import { Card, Divider, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import Typography from "../../atoms/Typography";
import theme from "../../../theme/Theme";
import IconButton from "../../atoms/IconButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ExportCandidateCard } from "../../../constants";

interface ExportCardProps {
  onExportClick?: () => void;
}

const OuterBox = styled(Card)({
  width: "44.188rem",
  height: "22.375rem",
  boxShadow: "0px 4px 28px rgba(45,45,47,0.1)",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.textColor.white,
  borderRadius: theme.spacing(2),
});

const ButtonStack = styled(Stack)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  margin: "1rem",
});

const DatePickerStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "1rem",
  flex: 1,
});

const PreviewButton = styled(IconButton)({
  height: "2.25rem",
  width: "7.875rem",
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

export const ExportCandidateCVCard = ({ onExportClick }: ExportCardProps) => {
  const [fromDate, setFromDate] = useState<dayjs.Dayjs>(dayjs("01/01/2000"));
  const [toDate, setToDate] = useState<dayjs.Dayjs>(dayjs("01/01/2000"));
  const [previewDisable, setPreviewDisable] = useState<boolean>(true);
  const [validDate, setValidDate] = useState<boolean>(false);
  const isValidFromYear = (year: number) => {
    const currentYear = new Date().getFullYear();

    const minYear = 1800;
    return year >= minYear && year <= currentYear;
  };
  const isValidToYear = (year: number) => {
    const currentYear = new Date().getFullYear();

    const minYear = fromDate.year();
    if (minYear === year) {
      if (toDate.month() >= fromDate.month()) {
        return true;
      } else {
        return false;
      }
    }
    return year > minYear && year <= currentYear;
  };
  const isValidFromMonth = (month: number) => {
    const minMonth = 0;
    const maxMonth = 12;
    return month >= minMonth && month <= maxMonth;
  };
  const isValidToMonth = (month: number) => {
    const maxMonth = 12;
    const minMonth = 0;
    return month >= minMonth && month <= maxMonth;
  };
  const handleFromDateChange = (selectedDate: dayjs.Dayjs) => {
    const validYear = selectedDate.year();
    const validMonth = selectedDate.month();
    if (!isValidFromYear(validYear) || !isValidFromMonth(validMonth)) {
      setValidDate(true);
      setPreviewDisable(true);
    } else {
      setFromDate(selectedDate);
      setToDate(selectedDate);
      setValidDate(false);
      setPreviewDisable(false);
    }
  };

  const handleToDateChange = (selectedDate: dayjs.Dayjs) => {
    const validYear = selectedDate.year();
    const validMonth = selectedDate.month();
    if (!isValidToYear(validYear) || !isValidToMonth(validMonth)) {
      setValidDate(true);
      setPreviewDisable(true);
    } else {
      setToDate(selectedDate);
      setPreviewDisable(false);
      setValidDate(false);
    }
  };

  return (
    <OuterBox>
      <Typography
        variant="subtitle1"
        color={`${theme.palette.textColor.highemp}`}
        label={ExportCandidateCard.HEADING}
        sx={{ margin: "1rem", fontWeight: "600" }}
      />

      <Divider />

      <DatePickerStack>
        {ExportCandidateCard.DatePickersData.map((localization: any) => (
          <Stack key={localization.id} gap={"0.5rem"}>
            <Typography
              variant="body2"
              color={`${theme.palette.textColor.medemp}`}
              label={localization.label}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label=""
                value={localization.stateKey === "fromDate" ? fromDate : toDate}
                onChange={(value) =>
                  localization.stateKey === "fromDate"
                    ? handleFromDateChange(value as dayjs.Dayjs)
                    : handleToDateChange(value as dayjs.Dayjs)
                }
                disableFuture={true}
                minDate={
                  localization.stateKey === "toDate" ? fromDate : undefined
                }
                views={["year", "month", "day"]}
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: theme.palette.primaryColor[400],
                  },
                  width: "20.313rem",
                  borderRadius: "4px",
                  "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-adornedEnd":
                    {
                      height: "38px",
                      borderColor: theme.palette.structural.stroke,
                    },
                }}
              />
              {validDate && (
                <Typography
                  variant="body2"
                  color="red"
                  label="Please enter a valid date"
                />
              )}
            </LocalizationProvider>
          </Stack>
        ))}
      </DatePickerStack>

      <Divider />
      <ButtonStack>
        <PreviewButton
          variant="contained"
          text={ExportCandidateCard.EXPORTS_BUTTON}
          disabled={previewDisable}
          onClick={onExportClick}
        />
      </ButtonStack>
    </OuterBox>
  );
};
