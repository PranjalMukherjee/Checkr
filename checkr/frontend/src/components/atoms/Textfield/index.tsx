import { InputBase, styled , InputAdornment, SxProps, Theme} from "@mui/material";
import theme from "../../../theme/Theme";
import React from "react";

export interface InputProps {
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string;
  type?: string;
  height?: string | number;
  width?: string | number;
  border?: string | number;
  bradius?: string | number;
  bcolor?: string;
  bgcolor?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  sx?:SxProps<Theme>
}

const StyledInput = styled(InputBase)<{
  width?: number | string;
  height?: number | string;
  border?: number | string;
  bradius?: string | number;
  bcolor?: string;
  bgcolor?: string;
 
}>(({ width, height, border, bradius, bcolor, bgcolor  }) => ({
  width: width ?? "auto",
  height: height ?? "auto",
  border: border ?? "auto",
  borderColor: bcolor ?? "auto",
  borderRadius: bradius ?? "auto",
  backgroundColor: bgcolor ?? "auto",
  color: theme.palette.textColor.highemp,
  padding: `${theme.spacing(3)} ${theme.spacing(4.25)}`,
  typography: theme.typography.body2,
  '&:hover': {
    borderColor: `${theme.palette.structural.stroke}`
  },
}));

const TextInput = (props: InputProps) => {
  
  return (
    <StyledInput
      data-testid="myInput"
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      width={props.width}
      height={props.height}
      border={props.border}
      bradius={props.bradius}
      bcolor={props.bcolor}
      bgcolor={props.bgcolor}
      startAdornment={props.startAdornment && (
        <InputAdornment position="start">{props.startAdornment}</InputAdornment>
      )}
      endAdornment={props.endAdornment && (
        <InputAdornment position="end">{props.endAdornment}</InputAdornment>
      )}
      sx={{...props.sx}}
    />
  );
};

export default TextInput;
