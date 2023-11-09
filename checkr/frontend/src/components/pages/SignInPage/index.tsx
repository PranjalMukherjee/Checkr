import React from "react";
import { LoginTemplate } from "../../templates/LoginTemplate";
import Signin from "../../organisms/SignIn";
import LOGINSCREEN from "../../../../public/assests/images/Login screen.svg";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const SignInPage = () => {

  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();


  const handleForgetPassword = () => {
    navigate("/forgetpassword");
  }
  
  const handleSignUp = () => {
    navigate("/signup");
  }

  
  return (
    <LoginTemplate
      image={LOGINSCREEN}
      content={
        <Signin
        onClickForgotPassword={handleForgetPassword}
        onClickGoogleSignIn={() => loginWithRedirect()}
        onClickSignUp={handleSignUp}
        />
      }
    />
  );
};
