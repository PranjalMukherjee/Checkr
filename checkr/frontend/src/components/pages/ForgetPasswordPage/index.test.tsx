/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ForgetPasswordPage } from ".";
import {
  CONTINUE,
  EMAIL,
  EMAIL_PLACEHOLDER,
  FORGET_PASSWORD,
  RESET_PASSWORD,
} from "../../../constants";
import { BrowserRouter } from "react-router-dom";

describe("Forget password test suits", () => {
  it("Forget password successfull", () => {
    render(<BrowserRouter><ForgetPasswordPage /></BrowserRouter>);
    const forgetPassword = screen.getByText(FORGET_PASSWORD);
    expect(forgetPassword).toBeInTheDocument();
  });
  it("Text field rendered successful with the button enabled and OTP page rendered successfully", async () => {
    render(<BrowserRouter><ForgetPasswordPage /></BrowserRouter>);

    const resetPasswordButton = screen.getByRole("button", {
      name: RESET_PASSWORD,
    }) as HTMLInputElement;

    expect(resetPasswordButton).toBeDisabled();

    const email = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    expect(email).toBeInTheDocument();
    fireEvent.change(email, { target: { value: EMAIL } });

    expect(resetPasswordButton).toBeInTheDocument();

    fireEvent.click(resetPasswordButton);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const continueButton = screen.getByRole("button", {
      name: CONTINUE,
    }) as HTMLButtonElement;
    expect(continueButton).toBeDisabled();

    const inputBoxes = screen.queryAllByRole("textbox");
    screen.debug(inputBoxes);
    expect(inputBoxes.length).toBe(4);
    fireEvent.change(inputBoxes[0], { target: { value: "1" } });

    expect(continueButton).toBeEnabled();
    fireEvent.click(continueButton);
  });
});
