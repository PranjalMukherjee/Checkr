import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import MuiAvatar from ".";


test("Renders correctly", () => {
    render(
      <MuiAvatar
        height=""
        width=""
        padding=""
        src="/path/to/test-image.png"
      />
    );
    const element = screen.getByAltText("Avatar logo");
    expect(element).toBeInTheDocument();
  });
