import React from "react";
import { LoginTemplate } from "../../templates/LoginTemplate";
import LOGINSCREEN from "../../../../public/assests/images/Login screen.svg";
import { ForgetPassword } from "../../organisms/ForgetPassword";
import { useNavigate } from "react-router-dom";


export const ForgetPasswordPage = () => {

    const navigate = useNavigate();

    
    return (
        <LoginTemplate image={LOGINSCREEN} 
        content={
            <ForgetPassword onClickContinueButton={()=>{navigate("/")}}/>
        } />
    )
}

