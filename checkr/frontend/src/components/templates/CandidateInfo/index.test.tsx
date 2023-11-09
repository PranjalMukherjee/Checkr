import { render } from "@testing-library/react";
import CandidateInfoTemplate from ".";
import React from "react";

test("render with props ", () => {
  const customSidebar = <div>Custom Sidebar</div>;
  const customHeader = <div>Custom Header</div>;
  const customContent = <div>Custom Content</div>;

  const { getByText } = render(
    <CandidateInfoTemplate
      leftnavbar={customSidebar}
      header={customHeader}
      body={customContent}
    />
  );

  expect(getByText("Custom Sidebar")).toBeInTheDocument();
  expect(getByText("Custom Header")).toBeInTheDocument();
  expect(getByText("Custom Content")).toBeInTheDocument();
});

test("render with no props", () => {
  const { getByText } = render(<CandidateInfoTemplate />);
  expect(getByText("leftnavbar")).toBeInTheDocument();
  expect(getByText("Header")).toBeInTheDocument();
  expect(getByText("Body")).toBeInTheDocument();
});
