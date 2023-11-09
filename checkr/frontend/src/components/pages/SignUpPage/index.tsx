import React from "react";
import { LoginTemplate } from "../../templates/LoginTemplate";

import LOGINSCREEN from "../../../../public/assests/images/Login screen.svg";
import Signup from "../../organisms/Signup";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {

  const navigate = useNavigate();

  
  return (
    <LoginTemplate
      image={LOGINSCREEN}
      content={<Signup revertSignInButton={() => {navigate("/")}}  />}
    />
  );
};
