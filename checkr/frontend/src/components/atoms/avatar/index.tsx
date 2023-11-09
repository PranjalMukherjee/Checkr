import { Avatar } from "@mui/material";
import * as React from "react";

interface AvatarProps {
  height?: string;
  width?: string;
  padding?: string;
  src: string;
}

const MuiAvatar = ({ height, width, padding, src }: AvatarProps) => {
  return (
    <Avatar
      sx={{ height, width, padding}}
      src={src}
      alt="Avatar logo"
    />
  );
};

export default MuiAvatar;
