import React from "react";
import { Chip as MuiChip, SxProps} from "@mui/material";
import { Theme } from "@emotion/react";


interface ChipProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  sx?: SxProps<Theme>;
}

const Chip = ({ label, backgroundColor, color, sx }: ChipProps) => {
  return (
    <MuiChip
      data-testid="chip"
      label={label}
      role="button"
      variant="outlined"
      sx={{
        backgroundColor: backgroundColor ,
        color: color,
        borderColor: backgroundColor,
        borderRadius: "4px",
        height:"26px",
        ...sx,
      }}
    />
  );
};

export default Chip;
