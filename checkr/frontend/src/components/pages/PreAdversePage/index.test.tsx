import React from "react";
import { render, screen } from "@testing-library/react";
import PreAdversePage from ".";
import { PreAdverseActionNotice } from "../../organisms/PreAdverseAction";
import { NoticeCard } from "../../molecules/notice";
import { PRE_ADVERACTION } from "../../../constants";
import { BrowserRouter } from "react-router-dom";

test("renders without errors", () => {
  render(<BrowserRouter><PreAdversePage /></BrowserRouter>);
  const adverseElements = screen.getAllByText(/Pre-Adverse Action Notice/);
  expect(adverseElements.length).toBeGreaterThan(0);
});

test("render pre-adverse-action  ", () => {
  render(<BrowserRouter><PreAdversePage /></BrowserRouter>);

  const text = screen.getByText("From:");
  expect(text).toBeInTheDocument();
});

test("Notice popup successfull", () => {
  render(<NoticeCard preAdverAction={PRE_ADVERACTION} />);
  const text = screen.getByText("Assault Domestic Violence");
  expect(text).toBeInTheDocument();
});
