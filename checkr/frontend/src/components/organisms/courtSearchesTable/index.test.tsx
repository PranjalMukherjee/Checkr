import { render, screen, waitFor } from "@testing-library/react";
import CourtSearchesTable from ".";
import "@testing-library/jest-dom";
import React from "react";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { BASE_URl_BACKEND } from  "../../../constants";

test("Render Header", async () => {
  render(<CourtSearchesTable />);
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
  
  const element = screen.getByText(/Court/);
  expect(element).toBeInTheDocument();
});

test("Render TableBody", async () => {
  render(<CourtSearchesTable />);

  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
  
  const tableBodyElement = screen.queryByTestId("tablebodytest");
  expect(tableBodyElement).toBeInTheDocument();
});



test("Render TableHead", async () => {
  render(<CourtSearchesTable />);

  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
  
  const tableRowElement = screen.queryByTestId('tableheadertest');
  expect(tableRowElement).toBeInTheDocument();
});
test("error handling", async () => {
  server.use(

    rest.get(`${BASE_URl_BACKEND}/searches/:candidateId`, (req, res, ctx) => {

      return res(ctx.status(500));
    })
  );
  render(<CourtSearchesTable />);

  const error = await screen.findByText("Error...");
  expect(error).toBeInTheDocument();
});
