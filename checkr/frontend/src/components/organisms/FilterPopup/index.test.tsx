import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from ".";

const mockHandleClose = jest.fn();

describe("Filter Component", () => {
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

  test("renders the AdverseActionFilter component without errors", () => {
    render(
      <Filter
        isCandidatesFilter={false}
        handleClose={mockHandleClose}
        handleFilterStatusChange={jest.fn()}
        filterStatus={[]}
      />
    );

    const adverseActionFilter = screen.getByTestId("adverseActionFilter");
    expect(adverseActionFilter).toBeInTheDocument();
  });
});
