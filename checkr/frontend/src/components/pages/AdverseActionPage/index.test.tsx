import { render, screen } from "@testing-library/react";
import AdverseActionsPage from ".";
import Filter from "../../organisms/FilterPopup";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const mockHandleClose = jest.fn();

test("renders without errors", () => {
  render(<BrowserRouter><AdverseActionsPage /></BrowserRouter>);
  const signInElements = screen.getAllByText(/Adverse Actions/);
  expect(signInElements.length).toBeGreaterThan(0);
});

test("renders candidates filter with checkboxes", () => {
  render(
    <Filter
      isCandidatesFilter={true}
      handleClose={mockHandleClose}
      handleFilterStatusChange={jest.fn()}
      filterStatus={[]}
    />
  );

  const status1Checkbox = screen.getByTestId("status1-checkbox");
  expect(status1Checkbox).toBeInTheDocument();

  const status2Checkbox = screen.getByTestId("status2-checkbox");
  expect(status2Checkbox).toBeInTheDocument();

  const status3Checkbox = screen.getByTestId("status3-checkbox");
  expect(status3Checkbox).toBeInTheDocument();
});
