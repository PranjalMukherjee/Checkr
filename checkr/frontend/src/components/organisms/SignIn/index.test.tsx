import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Signin from "./index";
import { BASE_URl_BACKEND, SignInOrganism } from "../../../constants";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";

test("renders Signin component without errors", () => {
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const signInElements = screen.getAllByText(/Sign in/i);
  expect(signInElements.length).toBeGreaterThan(0);
});

test("displays the correct email label", () => {
  const emailLabel = /Email/i;
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const emailLabels = screen.getAllByText(emailLabel);
  expect(emailLabels.length).toBeGreaterThan(0);
});

test("displays the correct password label", () => {
  const passwordLabel = /Password/i;
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const passwordLabels = screen.getAllByText(passwordLabel);
  expect(passwordLabels.length).toBeGreaterThan(0);
});

test("inputs accept user input", () => {
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(
    "abc@gmail.com"
  ) as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    "********"
  ) as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  expect(emailInput.value).toBe("test@example.com");
  expect(passwordInput.value).toBe("password123");
});

test("SignIn Button functionality correctly renders", () => {

  render(<BrowserRouter><Signin /></BrowserRouter>);

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
test("SignIn Button disabled ", () => {

  render(<BrowserRouter><Signin /></BrowserRouter>);

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
  fireEvent.change(emailInput, { target: { value: "@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  expect(SignInButton).toBeDisabled();

});

test("Password Field rendered correctly", () => {
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const passwordInput = screen.getByPlaceholderText(
    "********"
  ) as HTMLInputElement;
  fireEvent.change(passwordInput, { target: { value: "Password123" } });

  const eyeIcon = screen.getByTestId("eye-icon");

  expect(passwordInput.type).toBe("password");

  fireEvent.click(eyeIcon);
  expect(passwordInput.type).toBe("text");

  fireEvent.click(eyeIcon);
  expect(passwordInput.type).toBe("password");
});
test("Password Field rendered incorrect", () => {
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const passwordInput = screen.getByPlaceholderText(
    "********"
  ) as HTMLInputElement;
  fireEvent.change(passwordInput, { target: { value: "Pas" } });

});

test("checkbox functionality",()=>{
  render(<BrowserRouter><Signin /></BrowserRouter>);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

})
test("axios put error handling", async () => {
  server.use(
    rest.post(
      `${BASE_URl_BACKEND}/user/signIn/token`,
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );
  render(<BrowserRouter><Signin /></BrowserRouter>);
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

  await waitFor(() => {
    expect(screen.queryByText("User Not Found, Please Sign Up")).toBeInTheDocument();
  });
});