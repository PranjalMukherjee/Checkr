import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdverseActionsTable from ".";
import "@testing-library/jest-dom";
import React from "react";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { BASE_URl_BACKEND } from "../../../constants";
import { BrowserRouter } from "react-router-dom";
import DataTable from "../adverseActions";

test("clicking on pagination", async () => {
  render(
    <BrowserRouter>
      <DataTable isCandidateFilter={true} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const pagination = screen.getByTestId("pagination-Adv");
  expect(pagination).toBeInTheDocument();
  const initialPage = screen.getByLabelText("page 1");
  expect(initialPage).toBeInTheDocument();
  const nextPage = screen.getByLabelText("Go to page 2");
  fireEvent.click(nextPage);
});

test("render TypographyAtom", async () => {
  render(<AdverseActionsTable isCandidateFilter={false} />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
  const typographyAtom = screen.getByTestId("typography-test");
  expect(screen.getByTestId("datatable")).toBeInTheDocument();
  expect(typographyAtom).toBeInTheDocument();
});

test("renders header elements ", async () => {
  render(<AdverseActionsTable isCandidateFilter={false} />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const headerElements = screen.getByTestId("header-test");
  expect(headerElements).toBeInTheDocument();
});

test("renders TableHead ", async () => {
  render(<AdverseActionsTable isCandidateFilter={false} />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const tableHead = screen.getByTestId("tableheadertest");
  expect(tableHead).toBeInTheDocument();
});

test("renders TableBody ", async () => {
  render(<AdverseActionsTable isCandidateFilter={false} />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const tableBody = screen.getByTestId("tablebodytest");
  expect(tableBody).toBeInTheDocument();
});

test("filters the table data based on status", async () => {
  render(<AdverseActionsTable isCandidateFilter={true} />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  fireEvent.click(screen.getByTestId("filter-button"));

  fireEvent.click(screen.getByTestId("status1-checkbox"));
  fireEvent.click(screen.getByTestId("filter-button"));
});
test("updates searchValue state on input change", async () => {
  render(<AdverseActionsTable isCandidateFilter={true} />);

  await waitFor(() => {
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  const searchInput = (await waitFor(() =>
    screen.getByRole("textbox")
  )) as HTMLInputElement;
  fireEvent.change(searchInput, { target: { value: "Test Search" } });

  expect(searchInput.value).toBe("Test Search");
});
test("error handling", async () => {
  server.use(
    rest.get(`${BASE_URl_BACKEND}/action/`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<AdverseActionsTable isCandidateFilter={true} />);

  const error = await screen.findByText("Error...");
  expect(error).toBeInTheDocument();
});
