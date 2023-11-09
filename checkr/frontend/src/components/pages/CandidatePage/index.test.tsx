import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import CandidatePage from ".";
import Filter from "../../organisms/FilterPopup";
import React from "react";
import DataTable from "../../organisms/CandidateTable";
import { BrowserRouter } from "react-router-dom";
import {  ExportCandidateCard } from "../../../constants";

const mockHandleClose = jest.fn();



test("renders without errors", () => {
  render(<BrowserRouter><CandidatePage /></BrowserRouter>);
  const signInElements = screen.getAllByText(/Candidates/);
  expect(signInElements.length).toBeGreaterThan(0);
});

test("renders candidates filter with checkboxes", () => {
  render(
    <BrowserRouter>
    <Filter
      isCandidatesFilter={true}
      handleClose={mockHandleClose}
      handleFilterStatusChange={jest.fn()}
      filterStatus={[]}
    />
    </BrowserRouter>
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
    <BrowserRouter>
    <Filter
      isCandidatesFilter={false}
      handleClose={mockHandleClose}
      handleFilterStatusChange={jest.fn()}
      filterStatus={[]}
    />
    </BrowserRouter>
  );
    const adverseActionFilter = screen.getByTestId("adverseActionFilter");
    expect(adverseActionFilter).toBeInTheDocument();
  });
test("filters the table data based on status", async () => {
  render(<BrowserRouter><DataTable isCandidateFilter={true} /></BrowserRouter>);
  
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
  
    fireEvent.click(screen.getByTestId("filter-button"));
  
    fireEvent.click(screen.getByTestId("status1-checkbox"));
  });
  test("updates searchValue state on input change", async () => {
    render(<BrowserRouter><DataTable isCandidateFilter={true} /></BrowserRouter>);
    const searchInput = (await waitFor(() =>
      screen.getByRole("textbox")
    )) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Test Search" } });
  
    expect(searchInput.value).toBe("Test Search");
  });
  test("renders DataTable component without errors", () => {
    render(<BrowserRouter><DataTable isCandidateFilter={true} /></BrowserRouter>);
  });
  
  test('renders TypographyAtom with test ID "typography-test"', async () => {
    render(<BrowserRouter><DataTable isCandidateFilter={false} /></BrowserRouter>);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
    
    const typographyAtom = screen.getByTestId("typography-test");
    expect(screen.getByTestId("datatable")).toBeInTheDocument();
    expect(typographyAtom).toBeInTheDocument();
  });
  
  test('renders header elements with test ID "header-test"', async () => {
    render(<BrowserRouter><DataTable isCandidateFilter={false} /></BrowserRouter>);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
    
    const headerElements = screen.getByTestId("header-test");
    expect(headerElements).toBeInTheDocument();
  });
  
  
  
  test('renders TableBody with test ID "tablebodytest"', async () => {
    render(<BrowserRouter><DataTable isCandidateFilter={false} /></BrowserRouter>);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
    
    const tableBody = screen.getByTestId("tablebodytest");
    expect(tableBody).toBeInTheDocument();
  });
  test("handles empty search input and displays all rows", async () => {
    render(<BrowserRouter><DataTable isCandidateFilter={true} /></BrowserRouter>);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
    
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "" } });
  
    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toBeGreaterThan(0);
  
    // Ensure all rows are displayed when the search input is empty.
  });
  test("clicking on export", async () => {
    render(<BrowserRouter><CandidatePage /></BrowserRouter>);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  
    const button = screen.getByTestId("export-element");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const DatePicker = screen.getAllByRole("button",{name:ExportCandidateCard.CalenderButton});
    const fromDatePicker = within(DatePicker[1]).getByTestId(ExportCandidateCard.CALENDERICON);
    fireEvent.click(fromDatePicker);
    const selectDate = screen.getByRole("gridcell", {
      name: /10/i,
    });
    fireEvent.click(selectDate);

    const ExportButtonElement = screen.getByText(ExportCandidateCard.EXPORTS_BUTTON);
    fireEvent.click(ExportButtonElement);
  
  });
  