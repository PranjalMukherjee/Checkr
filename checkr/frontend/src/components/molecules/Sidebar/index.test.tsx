import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from ".";
import { BrowserRouter } from "react-router-dom";


jest.mock('@auth0/auth0-react', () => {
  return {
    useAuth0: jest.fn().mockImplementation(() => ({
      logout: jest.fn(),
    })),
  };
});


test("renders without errors", () => {
  render(<BrowserRouter><Sidebar /></BrowserRouter>);
  const adverseElements = screen.getAllByText(/Candidates/);
  expect(adverseElements.length).toBeGreaterThan(0);
});

test("Should render Icon", () => {
  render(<BrowserRouter><Sidebar /></BrowserRouter>);
  const iconElement = screen.getByTestId("icon-element");
  expect(iconElement).toBeInTheDocument();
});

test("render profile name", () => {
  render(<BrowserRouter><Sidebar /></BrowserRouter>);
  const nameElements = screen.getAllByText(/James Rodriguez/);
  expect(nameElements.length).toBeGreaterThan(0);
});
test("clicking logout", () => {
  render(<BrowserRouter><Sidebar /></BrowserRouter>);
  const button = screen.getAllByRole("button");
  expect(button[7]).toBeInTheDocument();
  fireEvent.click(button[7]);

  expect(screen.getByText("Confirm Logout")).toBeInTheDocument();
  const cancel = screen.getByRole("button",{name:"Cancel"});
  fireEvent.click(cancel);

  fireEvent.click(button[7]);

  const logout = screen.getByRole("button",{name:"Logout"});
  expect(logout).toBeInTheDocument();
  fireEvent.click(logout);
});

test("clicking Adverse actions button", () => {
  render(<BrowserRouter><Sidebar /></BrowserRouter>);
  
  const adversebutton = screen.getByRole("button",{name:"Adverse Action"});
  expect(adversebutton).toBeInTheDocument();
  fireEvent.click(adversebutton);
});

test("clicking candidates button", () => {
  render(<BrowserRouter><Sidebar /></BrowserRouter>);
  
  const candidatesbutton = screen.getByRole("button",{name:"Candidates"});
  expect(candidatesbutton).toBeInTheDocument();
  fireEvent.click(candidatesbutton);
});