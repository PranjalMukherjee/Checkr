/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import { ForgetPassword } from ".";
import { CONTINUE, EMAIL, EMAIL_PLACEHOLDER, FORGET_PASSWORD, INVALID_EMAIL, RESET_PASSWORD } from "../../../constants";
import { BrowserRouter } from "react-router-dom";


describe("Forget password test suits", () => {


  it("Forget password successfull", () => {
    render(<BrowserRouter><ForgetPassword /></BrowserRouter>);

    const forgetPassword = screen.getByText(FORGET_PASSWORD);
    expect(forgetPassword).toBeInTheDocument();
  });


  it("Forget password and OTP screen render successfully ", async () => {
    render(<BrowserRouter><ForgetPassword /></BrowserRouter>);

    const resetPasswordButton = screen.getByRole("button", {
      name: RESET_PASSWORD,
    }) as HTMLInputElement;

    expect(resetPasswordButton).toBeDisabled();

    const email = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    expect(email).toBeInTheDocument();
    fireEvent.change(email, { target: { value: EMAIL } });

    expect(resetPasswordButton).toBeInTheDocument();

    fireEvent.click(resetPasswordButton);

    await new Promise(resolve => setTimeout(resolve, 2000));
  
   const continueButton = screen.getByRole("button", {
      name: CONTINUE,
    }) as HTMLButtonElement;
    expect(continueButton).toBeDisabled();

    const inputBoxes = screen.queryAllByRole("textbox");
    screen.debug(inputBoxes);
    expect(inputBoxes.length).toBe(4);
    fireEvent.change(inputBoxes[0], { target: { value: "1" } });

    fireEvent.click(screen.getByRole("button", {
      name: "Go Back",
    }) as HTMLButtonElement);

    expect(continueButton).toBeEnabled();
    fireEvent.click(continueButton);
  });


  it("Back button successful", async () => {
    render(<BrowserRouter><ForgetPassword /></BrowserRouter>);
  
    const backButton = screen.getByRole("button", {
      name: "Go Back",
    }) as HTMLButtonElement;
    fireEvent.click(backButton);
  });
  

  it("should disable the button when email is Invalid", async () => {
    render(
      <BrowserRouter><ForgetPassword /></BrowserRouter>
    );
    
    const email = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    fireEvent.change(email, { target: { value: INVALID_EMAIL } });

    const resetPasswordButton = screen.getByRole("button", {
      name: RESET_PASSWORD,
    }) as HTMLInputElement;

    expect(resetPasswordButton).toBeDisabled();
  });
});
