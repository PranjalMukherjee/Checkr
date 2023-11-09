import { render, screen } from "@testing-library/react";
import TextInput, { InputProps } from "./index";
import theme from "../../../theme/Theme";
import React from "react";

describe("TextInput", () => {
  const defaultProps: InputProps = {
    width: 200,
    height: 50,
    bcolor: `${theme.palette.structural.stroke}`,
    placeholder: "Enter your email",
  };

  test("renders textlabel with placeholder", () => {
    render(<TextInput {...defaultProps} />);
    const textlabel = screen.getByTestId("myInput");
    expect(textlabel).toBeInTheDocument();
    
  });

  test("renders textlabel with correct width", () => {
    render(<TextInput {...defaultProps} />);
    const textlabel = screen.getByTestId("myInput");
    const expectedWidth = defaultProps.width ? `${defaultProps.width}px` : "auto";
    expect(textlabel).toHaveStyle(`width: ${expectedWidth}`);
  });
  
  test("renders textlabel with correct height", () => {
    render(<TextInput {...defaultProps} />);
    const textlabel = screen.getByTestId("myInput");
    const expectedHeight = defaultProps.height ? `${defaultProps.height}px` : "auto";
    expect(textlabel).toHaveStyle(`height: ${expectedHeight}`);
  });
  
  test("renders textlabel with correct border color", () => {
    render(<TextInput {...defaultProps} />);
    const textlabel = screen.getByTestId("myInput");
    expect(textlabel).toHaveStyle(`border-color: ${defaultProps.bcolor}`);
  });

  test("renders textlabel with custom border and border-radius", () => {
    const border = "2px solid black";
    const borderRadius = "10px";
    render(
      <TextInput {...defaultProps} border={border} bradius={borderRadius} />
    );
    const textlabel = screen.getByTestId("myInput");
    expect(textlabel).toHaveStyle(`border: ${border}`);
    expect(textlabel).toHaveStyle(`border-radius: ${borderRadius}`);
  });
});
