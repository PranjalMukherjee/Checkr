import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from ".";

describe("Pagination component", () => {
  test("renders without errors", () => {
    render(<Pagination />);
  });

  test("renders correct drop button label", () => {
    const { getByTestId } = render(<Pagination />);
    const dropButton = getByTestId("drop-button");
    expect(dropButton).toHaveTextContent("10 per page");
  });

  test("renders correct page numbers on PaginationButtons", () => {
    const { getByText } = render(<Pagination />);
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
  });
});
