import React from "react";
import { render, fireEvent, screen, within} from "@testing-library/react";
import { ExportCandidateCVCard } from ".";
import { ExportCandidateCard } from "../../../constants";

describe("ExportCandidateCVCard", () => {
  test("renders without errors", () => {
    render(<ExportCandidateCVCard />);

    const typograpgy = screen.getByText(ExportCandidateCard.HEADING);
    expect(typograpgy).toBeInTheDocument();
    const from = screen.getByText(ExportCandidateCard.FROM);
    expect(from).toBeInTheDocument();
    const to = screen.getByText(ExportCandidateCard.TO);
    expect(to).toBeInTheDocument();


  });
  test("updates toDate state when selecting dates", () => {
    render(<ExportCandidateCVCard />);
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
  test("updates fromDate state when selecting dates", () => {
    render(<ExportCandidateCVCard />);
    const DatePicker = screen.getAllByRole("button",{name:ExportCandidateCard.CalenderButton});
    const fromDatePicker = within(DatePicker[0]).getByTestId(ExportCandidateCard.CALENDERICON);
    fireEvent.click(fromDatePicker);
    const selectDate = screen.getByRole("gridcell", {
      name: /10/i,
    });
    fireEvent.click(selectDate);
   
  });

});
