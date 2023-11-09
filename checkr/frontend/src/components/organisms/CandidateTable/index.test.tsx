import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DataTable from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { BASE_URl_BACKEND } from "../../../constants";

test("renders DataTable component without errors", () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );});


test('renders header elements with test ID "header-test"', async () => {
render(
    <BrowserRouter>
      <DataTable isCandidateFilter={false} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
  
  const headerElements = screen.getByTestId("header-test");
  expect(headerElements).toBeInTheDocument();
});


test('renders TableBody with test ID "tablebodytest"', async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={false} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
  
  const tableBody = screen.getByTestId("tablebodytest");
  expect(tableBody).toBeInTheDocument();
});

test("filters the table data based on status", async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  fireEvent.click(screen.getByTestId("filter-button"));

  fireEvent.click(screen.getByTestId("status1-checkbox"));
});
test("updates searchValue state on input change", async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
  
  const searchInput = (await waitFor(() =>
    screen.getByRole("textbox")
  )) as HTMLInputElement;
  fireEvent.change(searchInput, { target: { value: "Test Search" } });

  expect(searchInput.value).toBe("Test Search");
});
test("clicking on candidate", async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const button = screen.getByText("John Smith");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});

test("clicking on pagination", async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const pagination = screen.getByTestId("pagination");
  expect(pagination).toBeInTheDocument();
  const initialPage = screen.getByLabelText("page 1",);
  expect(initialPage).toBeInTheDocument();
  const nextPage =  screen.getByLabelText("Go to page 2")
  fireEvent.click(nextPage);

});
test("clicking on select", async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const selectElement = screen.getByTestId("select");
  fireEvent.mouseDown(selectElement);
});

test("error handling", async () => {
  server.use(
    rest.get(`${BASE_URl_BACKEND}/candidates/report`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  const error = await screen.findByText("Error...");
  expect(error).toBeInTheDocument();
});
