import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SignUpPage } from ".";
import { SignUpOrganism } from "../../../constants";
import { BrowserRouter } from "react-router-dom";

describe("SignUp page test suits", () => {
  test("renders without errors", () => {
    render(<BrowserRouter><SignUpPage /></BrowserRouter>);
    const signUpElements = screen.getAllByText(/Sign up/i);
    expect(signUpElements.length).toBeGreaterThan(0);
  });
  test("email and password and confirm password fields rendering", () => {
    render(<BrowserRouter><SignUpPage /></BrowserRouter>);
    const SignUpButton = screen.getByRole("button", {
      name: SignUpOrganism.headlabel,
    });
    expect(SignUpButton).toBeDisabled();
    const emailInput = screen.getByPlaceholderText(
      "abc@gmail.com"
    ) as HTMLInputElement;
    const passwordInput = screen.getAllByPlaceholderText(
      "********"
    ) as HTMLInputElement[];
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput[0], { target: { value: "Password123" } });
    fireEvent.change(passwordInput[1], { target: { value: "Password123" } });
    expect(SignUpButton).toBeEnabled();
    fireEvent.click(SignUpButton);
  });

  test("Signin button rendered successfully", () => {
    render(<BrowserRouter><SignUpPage /></BrowserRouter>);
    const SignUpButton = screen.getByRole("button", {
      name: SignUpOrganism.signin,
    });

    expect(SignUpButton).toBeInTheDocument();
    fireEvent.click(SignUpButton);
  });
});
