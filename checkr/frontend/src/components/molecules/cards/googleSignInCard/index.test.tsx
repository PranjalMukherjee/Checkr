import { fireEvent, render, screen } from "@testing-library/react";
import IconButton from "./index";
import "@testing-library/jest-dom";
import React from "react";

test("CardComponent", () => {
  render(<IconButton />);
  const githubElement = screen.getByText(/Sign in with GitHub/);
  expect(githubElement).toBeInTheDocument();
});

test("CardComponent", () => {
  render(<IconButton />);
  const googleElement = screen.getByText(/Sign in with Google/);
  expect(googleElement).toBeInTheDocument();
  fireEvent.click(googleElement);

});
