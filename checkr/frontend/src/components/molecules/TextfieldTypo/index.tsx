import React from "react";
import MyTypo from "../../atoms/Typography";
import TextInput from "../../atoms/Textfield";

import { Box, Stack ,TypographyProps } from "@mui/material";

export interface TextTypoProps  {
  color: string;
  variant?: TypographyProps['variant'] ;

  label?: string;
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
}

const TextTypo = (props: TextTypoProps) => {
  return (
    
    <Box component="div">
      <Stack spacing={2}>
      <Box component="div">
        <MyTypo
          label={props.label}
          variant={props.variant}
          color={props.color}
          sx={{marginBottom : "-7px"}}
        />
      </Box>
      <Box component="div" >
        <TextInput
          height={props.height}
          width={props.width}
          placeholder={props.placeholder}
          border={props.border}
          bradius={props.bradius}
          bcolor={props.bcolor}
          bgcolor={props.bgcolor}
          value={props.value}
          type={props.type}
          onChange={props.onChange}
          endAdornment={props.endAdornment}
          startAdornment={props.startAdornment}
  
        />
      </Box>
      </Stack>
    </Box>
    
  );
};

export default TextTypo;
