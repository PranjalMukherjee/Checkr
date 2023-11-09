import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import Signup from "./index";
import { BrowserRouter } from "react-router-dom";


test("renders Signin component without errors", () => {
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const signInElements = screen.getAllByText(/Sign up/i);
  expect(signInElements.length).toBeGreaterThan(0);
});

test("displays the correct email label", () => {
  const emailLabel = /Email/i;
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const emailLabels = screen.getAllByText(emailLabel);
  expect(emailLabels.length).toBeGreaterThan(0);
});

test("displays the correct password label", () => {
  const passwordLabel = /Password/i;
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const passwordLabels = screen.getAllByText(passwordLabel);
  expect(passwordLabels.length).toBeGreaterThan(0);
});

test("inputs accept user input", () => {
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(
    "abc@gmail.com"
  ) as HTMLInputElement;
  const passwordInput = screen.getAllByPlaceholderText(
    "********"
  ) as HTMLElement[];
  const password: any = passwordInput[0];
  const confirmPassword: any = passwordInput[1];
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.change(confirmPassword, { target: { value: "password123" } });
  expect(emailInput.value).toBe("test@example.com");
  expect(password.value).toBe("password123");
  expect(confirmPassword.value).toBe("password123");
});
test("inputs accept user input with mismatch passwprd", () => {
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(
    "abc@gmail.com"
  ) as HTMLInputElement;
  const passwordInput = screen.getAllByPlaceholderText(
    "********"
  ) as HTMLElement[];
  const password: any = passwordInput[0];
  const confirmPassword: any = passwordInput[1];
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.change(confirmPassword, { target: { value: "password12323" } });
  expect(emailInput.value).toBe("test@example.com");
  expect(password.value).toBe("password123");
  expect(confirmPassword.value).toBe("password12323");
});
test("inputs invalid email", () => {
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(
    "abc@gmail.com"
  ) as HTMLInputElement;
 
  fireEvent.change(emailInput, { target: { value: "test" } });
  expect(emailInput.value).toBe("test");
});

test("inputs accept user input with invalid password", () => {
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(
    "abc@gmail.com"
  ) as HTMLInputElement;
  const passwordInput = screen.getAllByPlaceholderText(
    "********"
  ) as HTMLElement[];
  const password: any = passwordInput[0];
  const confirmPassword: any = passwordInput[1];
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(password, { target: { value: "pas" } });
  fireEvent.change(confirmPassword, { target: { value: "pass" } });
  expect(emailInput.value).toBe("test@example.com");
  expect(password.value).toBe("pas");
  expect(confirmPassword.value).toBe("pass");
});

test("shows password on click", () => {
  render(<BrowserRouter><Signup /></BrowserRouter>);
  const passwordInput = screen.getAllByPlaceholderText(
    "********"
  ) as HTMLInputElement[];

  // Password and Confirm Password fields should have type "password" initially
  expect(passwordInput[0].type).toBe("password");
  expect(passwordInput[1].type).toBe("password");

  const eyeIcon1 = screen.getByTestId("eye-icon1");
  const eyeIcon2 = screen.getByTestId("eye-icon2");

  // Click the eye icon 1 to show password
  fireEvent.click(eyeIcon1);

  // Password field should now have type "text"
  expect(passwordInput[0].type).toBe("text");

  // Click the eye icon 2 to show confirm password
  fireEvent.click(eyeIcon2);

  // Confirm Password field should now have type "text"
  expect(passwordInput[1].type).toBe("text");
});
