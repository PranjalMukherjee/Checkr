import React from "react";
import { render, screen } from "@testing-library/react";

import Dropdown from "./index";

describe("Dropdown", () => {
  test("renders without errors", () => {
    render(<Dropdown />);
  });

  test("renders with custom color", () => {
    const color = "red";
    render(<Dropdown color={color} />);
    const dropdownIcon = screen.getByRole("img");
    expect(dropdownIcon).toHaveAttribute("color", color);
  });
});
