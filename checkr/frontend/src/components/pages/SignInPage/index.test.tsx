import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SignInPage } from ".";
import { SignInOrganism } from "../../../constants";
import { BrowserRouter } from "react-router-dom";


jest.mock('@auth0/auth0-react', () => {
  return {
    useAuth0: jest.fn().mockImplementation(() => ({
      loginWithRedirect : jest.fn()
    })),
  };
});


describe("SignIn page test suits", () => {
  test("renders without errors", () => {
    render(<BrowserRouter><SignInPage /></BrowserRouter>);
    const signInElements = screen.getAllByText(/Sign in/i);
    expect(signInElements.length).toBeGreaterThan(0);
  });
  test("email and password fields rendering", () => {
    render(<BrowserRouter><SignInPage /></BrowserRouter>);
    const SignInButton = screen.getByRole("button", {
      name: SignInOrganism.headlabel,
    });
    expect(SignInButton).toBeDisabled();
    const emailInput = screen.getByPlaceholderText(
      "abc@gmail.com"
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      "********"
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    expect(SignInButton).toBeEnabled();
    fireEvent.click(SignInButton);
  });
  test("google signIn render successfull", () => {
    render(<BrowserRouter><SignInPage /></BrowserRouter>);
    const GoogleSignInButton = screen.getByRole("button", {
      name: "Sign in with Google",
    });
    expect(GoogleSignInButton).toBeInTheDocument();
    fireEvent.click(GoogleSignInButton);
  });
  test("forget password button rendered successfully", () => {
    render(<BrowserRouter><SignInPage /></BrowserRouter>);
    const ForgetPasswordButton = screen.getByRole("button", {
      name: SignInOrganism.forgetpassword,
    });

    expect(ForgetPasswordButton).toBeInTheDocument();
    fireEvent.click(ForgetPasswordButton);
  });
  test("Signup button rendered successfully", () => {
    render(<BrowserRouter><SignInPage /></BrowserRouter>);
    const SignUpButton = screen.getByRole("button", {
      name: SignInOrganism.signup,
    });

    expect(SignUpButton).toBeInTheDocument();
    fireEvent.click(SignUpButton);
  });
});
