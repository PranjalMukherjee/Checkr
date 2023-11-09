import React from "react";
import { render, screen } from "@testing-library/react";
import MyTypo, { TypographyProps } from "./index";
import theme from "../../../theme/Theme";

test("should render typography component", () => {
  const props: TypographyProps = {
    variant: theme.typography.body1,
    color: `${theme.palette.primaryColor[500]}`,
    label: "Hello",
  };

  render(<MyTypo {...props} />);
  
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveStyle(`color: ${theme.palette.primaryColor[500]}`);
});

test("should render typography component with default variant if not provided", () => {
  const props: TypographyProps = {
    color: `${theme.palette.primaryColor[500]}`,
    label: "Hello",
  };

  render(<MyTypo {...props} />);
  
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

  // Assert the default variant style of the rendered text
  expect(textElement).toHaveStyle("font-size: 1rem");
  expect(textElement).toHaveStyle("font-weight: 400");
});


test("should render typography component with custom variant", () => {
  const customVariant = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const props: TypographyProps = {
    variant: customVariant,
    color: `${theme.palette.primaryColor[500]}`,
    label: "Hello",
  };

  render(<MyTypo {...props} />);
  
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

  // Assert the custom variant style of the rendered text
  expect(textElement).toHaveStyle("font-size: 20px");
  expect(textElement).toHaveStyle("font-weight: bold");

});
test("should render typography component color", () => {
  const props: TypographyProps = {
    variant: theme.typography.body1,
    color: `${theme.palette.primaryColor[500]}`,
    label: "Hello",
  };

  render(<MyTypo {...props} />);
  
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toHaveStyle(`color: ${theme.palette.primaryColor[500]}`);
});
test("should render typography component with specified color or default color", () => {
  const customColor = "red"; // Example custom color
  const props: TypographyProps = {
    variant: theme.typography.body1,
    color: customColor,
    label: "Hello",
  };

  render(<MyTypo {...props} />);
  
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

  // Assert the specified color or default color
  expect(textElement).toHaveStyle(`color: ${customColor}`);
});

test("should render typography component with default color when no color prop is provided", () => {
  const props: TypographyProps = {
    variant: theme.typography.body1,
    label: "Hello",
    color: "auto",
  };

  render(<MyTypo {...props} />);
  
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

  // Assert the default color style of the rendered text
  expect(textElement).toHaveStyle("color: auto");
});

