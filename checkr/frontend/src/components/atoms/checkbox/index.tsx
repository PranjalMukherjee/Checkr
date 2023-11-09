import * as React from "react";
import { Checkbox as MuiCheckbox, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import theme from "../../../theme/Theme";

interface CheckboxProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "default";
  onChange: (checked: boolean) => void;
  checked?: boolean;
  sx?: SxProps<Theme>;
}

const Checkbox = ({
  color,
  onChange,
  sx,
  checked,
}: CheckboxProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <div>
      <MuiCheckbox
        data-testid="checkbox"
        checked={checked}
        color={color}
        onChange={handleChange}
        disableRipple
        sx={{
          color: theme.palette.structural.stroke,
          "&.Mui-checked": {
            color: theme.palette.primaryColor[500],
          },
          ...sx,
        }}
      />
    </div>
  );
};
export default Checkbox;