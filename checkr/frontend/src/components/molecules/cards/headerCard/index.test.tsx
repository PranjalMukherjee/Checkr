import { render, screen } from "@testing-library/react";
import React from "react";
import HeaderCard from ".";
import "@testing-library/jest-dom";

test("SignInCardComponent", () => {
  render(<HeaderCard />);
  const googleElement = screen.getByTestId("export-element");
  expect(googleElement).toBeInTheDocument();
});

test("SignInCardComponent", () => {
  render(<HeaderCard />);
  const githubElement = screen.getByTestId("order-element");
  expect(githubElement).toBeInTheDocument();
});
