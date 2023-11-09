import { screen, render } from "@testing-library/react";
import React from "react";
import ExportReport from ".";

test("Render text element", () => {
  render(<ExportReport />);
  const text = screen.getByText("Download link was sucessfully sent to your email");
  expect(text).toBeInTheDocument();
});
