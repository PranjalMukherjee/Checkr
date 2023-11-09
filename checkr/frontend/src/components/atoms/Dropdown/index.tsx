import { IconButton } from "@mui/material";
import DropdownIcon from "../../../../public/assests/images/Arrow_Down.svg";
import React from "react";

export interface DropdownProps {
  width?: string;
  height?: string;
  color?: string;

  onClick?: (e: any) => void;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <IconButton onClick={props.onClick}>
     
      {
        <img
          src={DropdownIcon}
          width={props.width}
          height={props.height}
          color={props.color}
          alt="Image not rendered"
        />
      }
  
    </IconButton>
  );
};

export default Dropdown;
