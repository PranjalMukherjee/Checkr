/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen} from "@testing-library/react";
import { LoginTemplate } from ".";
import LOGINSCREEN from "../../../../public/assests/images/Login screen.svg"
import { ForgetPassword } from "../../organisms/ForgetPassword";
import { FORGET_PASSWORD } from "../../../constants";
import { BrowserRouter } from "react-router-dom";


describe("Login Template test suits", () => {


  it("Forget password successfull", () => {
    render(<BrowserRouter><LoginTemplate image={LOGINSCREEN} content={<ForgetPassword />} /></BrowserRouter>);

    const Screen = screen.getByTestId("LoginTemplate");
    expect(Screen).toBeInTheDocument();

    const Image = screen.getByAltText("LoginScreen");
    expect(Image).toBeInTheDocument();

    const contentText = screen.getByText(FORGET_PASSWORD);
    expect(contentText).toBeInTheDocument();
  });

});
