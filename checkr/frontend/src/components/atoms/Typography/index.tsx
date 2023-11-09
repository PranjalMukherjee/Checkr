import {
  SxProps,
  Theme,
  Typography,
  styled,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";

export interface TypographyProps extends MuiTypographyProps {
  color: string;

  label?: string;
  sx?: SxProps<Theme>;
}
const CustomTypo = styled(Typography)<{
  color?: string;
}>(({ color }) => ({
  color: color ?? "auto",
}));
const MyTypo = (props: TypographyProps) => {
  return (
    <CustomTypo
      sx={{
        typography: props.variant || "auto",
        ...props.sx,
      }}
      {...props}
    >
      {props.label}
    </CustomTypo>
  );
};

export default MyTypo;
