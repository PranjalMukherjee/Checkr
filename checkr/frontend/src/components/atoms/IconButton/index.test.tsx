import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import IconButton from ".";

describe("Button test suits", () => {
  it("Button rendered successfully", () => {
    render(<IconButton variant={"text"}></IconButton>);
    const button = screen.getByTestId("icon-button");
    expect(button).toBeInTheDocument();
  });
  it("checking for the label", () => {
    const handleClick = jest.fn();
    render(
      <IconButton
        variant={"text"}
        onClick={handleClick}
        text="Sign up"
      ></IconButton>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
  it("should render with start icon when `icon` prop is provided", () => {
    render(
      <IconButton
        icon={"./assets/Filter.svg"}
        variant={"outlined"}
        text="Filter"
      ></IconButton>
    );

    const startIcon = screen.getByRole("img");
    expect(startIcon).toBeInTheDocument();
    
  });

  it("should not render start icon when `icon` prop is not provided", () => {
    const { queryByAltText } = render(
      <IconButton variant="contained" onClick={jest.fn()} />
    );
    const startIcon = queryByAltText("Icon");
    expect(startIcon).toBeNull();
  });
});
