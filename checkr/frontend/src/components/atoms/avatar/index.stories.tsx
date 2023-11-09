import MuiAvatar from ".";
import React from "react";
import dp from '../../../../public/assests/images/profile.svg'

export default {
  title: "Atoms/Avatar",
  component: MuiAvatar,
};

export const Avatar = () => <MuiAvatar height="400px" width="400px" padding="90px 400px" src={dp} />;
