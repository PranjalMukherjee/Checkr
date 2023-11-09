import React, { ChangeEvent } from "react";
import {
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  FormGroup,
  styled,
} from "@mui/material";
import theme from "../../../theme/Theme";
import {
  ADVERSE_ACTION_FILTER_LABEL_DATA,
  CANDIDATES_FILTER_LABEL_DATA,
} from "../../../constants";
import Typography from "../../atoms/Typography";

export interface FilterProps {
  handleClose?: () => void;
  isCandidatesFilter: boolean;
  handleFilterStatusChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  filterStatus: string[];
  height?: string | number;
  left?: string | number;
  top?: string | number;
  ischecked?: boolean;
}
const StyledDialog = styled(Dialog)(({ height, left, top }: FilterProps) => ({
  height: height || "95%",
  marginLeft: left || "70%",
  marginTop: top || "188px",

  "& .MuiDialog-container": {
    alignItems: "flex-start",
  },
  "& .MuiDialogContent-root": {
    padding: "16px",
  },
  "& .MuiDialogTitle-root": {
    padding: "12px 0px 12px 16px",
  },
  "& .MuiFormControlLabel-root .MuiFormControlLabel-label": {
    fontSize: "12px",
    lineHeight: "18px",
  },
  "& .MuiFormControlLabel-root": {
    marginRight: "0px",
  },
  "& .MuiDialog-paper": {
    boxShadow: "0 4px 16px 0 rgba(3, 3, 3, 0.04)",
    width: "285px",
    margin: 0,
  },

  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
}));

const Filter = ({
  isCandidatesFilter,
  handleClose,
  handleFilterStatusChange,
  filterStatus,
  height,
  left,
  top,
  ischecked,
}: FilterProps) => {
  const renderCandidatesFilter = () => (
    <StyledDialog
      open={true}
      onClose={handleClose}
      isCandidatesFilter={false}
      filterStatus={[]}
      height={height}
      left={left}
      top={top}
    >
      <DialogTitle>
        <Typography
          variant="body1"
          label={CANDIDATES_FILTER_LABEL_DATA.title}
          color={`{theme.palette.textColor.highemp}`}
        />
      </DialogTitle>
      <Divider />
      <DialogContent>
        <FormGroup>
          <Typography
            variant="body1"
            label={CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.title}
            color={`{theme.palette.textColor.medemp}`}
          />

          <FormControlLabel
            data-testid="status1-checkbox"
            control={
              <Checkbox
                checked={ischecked}
                onChange={handleFilterStatusChange}
                value={
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                    .values[0]
                }
                size="small"
              />
            }
            label={
              CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions.label[0]
            }
          />
          <FormControlLabel
            data-testid="status2-checkbox"
            control={
              <Checkbox
                onChange={handleFilterStatusChange}
                value={
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                    .values[1]
                }
                checked={filterStatus.includes(
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions.values[1].toUpperCase()
                )}
                size="small"
              />
            }
            label={
              CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions.label[1]
            }
          />
          <FormControlLabel
            data-testid="status3-checkbox"
            control={
              <Checkbox
                onChange={handleFilterStatusChange}
                value={
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions
                    .values[2]
                }
                checked={filterStatus.includes(
                  CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions.values[2].toUpperCase()
                )}
                size="small"
              />
            }
            label={
              CANDIDATES_FILTER_LABEL_DATA.firstSubTitle.labelOptions.label[2]
            }
          />
          <br />
          <Typography
            variant="body1"
            label={CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.title}
            color={`{theme.palette.textColor.lowemp}`}
          />

          {CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions.values.map(
            (value, index) => {
              return (
                <FormControlLabel
                  key={value}
                  sx={{
                    "&.Mui-disabled": {
                      background: theme.palette.textColor.white,
                    },
                  }}
                  disabled={true}
                  control={
                    <Checkbox
                      checked={false}
                      value={value}
                      size="small"
                      disabled={true}
                    />
                  }
                  label={
                    CANDIDATES_FILTER_LABEL_DATA.secondSubTitle.labelOptions
                      .label[index]
                  }
                />
              );
            }
          )}
        </FormGroup>
      </DialogContent>
    </StyledDialog>
  );
  const renderAdverseActionFilter = () => (
    <StyledDialog
      data-testid="adverseActionFilter"
      open={true}
      onClose={handleClose}
      height={height}
      left={left}
      top={top}
      isCandidatesFilter={false}
      filterStatus={[]}
    >
      <DialogTitle>
        <Typography
          variant="body1"
          label={ADVERSE_ACTION_FILTER_LABEL_DATA.heading}
          color={`{theme.palette.textColor.highemp}`}
        />
      </DialogTitle>
      <Divider />
      <DialogContent>
        <FormGroup>
          {ADVERSE_ACTION_FILTER_LABEL_DATA.labels.map(
            (filterOption, index) => {
              return (
                <FormControlLabel
                  key={filterOption.label}
                  control={
                    <Checkbox
                      checked={index + 1 === 1 ? true : false}
                      value={filterOption.label}
                      size="small"
                    />
                  }
                  label={filterOption.label}
                />
              );
            }
          )}
        </FormGroup>
      </DialogContent>
    </StyledDialog>
  );
  return (
    <Box>
      {isCandidatesFilter
        ? renderCandidatesFilter()
        : renderAdverseActionFilter()}
    </Box>
  );
};

export default Filter;
