import { screen, render } from "@testing-library/react";
import React from "react";
import TickCard from ".";

test("Render gif element", () => {
  render(<TickCard />);
  const imageElement = screen.getByTestId("gif-element");
  expect(imageElement).toBeInTheDocument();
});
