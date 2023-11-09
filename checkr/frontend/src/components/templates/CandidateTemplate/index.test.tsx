import { render } from "@testing-library/react";
import CandidateTemplate from ".";
import React from "react";

test("renders default content when no props are provided", () => {
  const { getByText } = render(<CandidateTemplate />);
  expect(getByText("Sidebar")).toBeInTheDocument();
  expect(getByText("Header")).toBeInTheDocument();
  expect(getByText("Content")).toBeInTheDocument();
});

test("renders custom content when props are provided", () => {
  const customSidebar = <div>Custom Sidebar</div>;
  const customHeader = <div>Custom Header</div>;
  const customContent = <div>Custom Content</div>;

  const { getByText } = render(
    <CandidateTemplate
      sidebar={customSidebar}
      header={customHeader}
      content={customContent}
    />
  );

  expect(getByText("Custom Sidebar")).toBeInTheDocument();
  expect(getByText("Custom Header")).toBeInTheDocument();
  expect(getByText("Custom Content")).toBeInTheDocument();
});
