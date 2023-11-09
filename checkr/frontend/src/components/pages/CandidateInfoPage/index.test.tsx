import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { CandidateInfoPage } from ".";
import { BASE_URl, BASE_URl_BACKEND, candidateInfo } from "../../../constants";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
import { server } from "../../../mocks/server";

describe("Candidate Info test suits", () => {
  test("renders without errors", async () => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const Candidate = screen.getByText("Candidate Information");
    expect(Candidate).toBeInTheDocument();
  });

  it("candidate Information rendered successfull", async () => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const text = screen.getByText("Candidate Information");
    expect(text).toBeInTheDocument();
    fireEvent.click(text);
    expect(screen.getByText(candidateInfo[0].title)).toBeInTheDocument();
  });
  it("report Information rendered successfull", async () => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const text = screen.getByText("Report Information");
    expect(text).toBeInTheDocument();
    fireEvent.click(text);
    expect(screen.getByText(candidateInfo[0].title)).toBeInTheDocument();
  });
  it("Header Button Functionality", async () => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    const backButton = screen.getByAltText("Back");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);

    const preAdverseActionButton = screen.getByRole("button", {
      name: "Pre-Adverse Action",
    });
    expect(preAdverseActionButton).toBeInTheDocument();
    fireEvent.click(preAdverseActionButton);

    const engageButton = screen.getByRole("button", { name: "Engage" });
    expect(engageButton).toBeInTheDocument();
    fireEvent.click(engageButton);
  });
  it("click on engage button", async () => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
    const button = screen.getByRole("button", { name: "Engage" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
  it("candidate Information rendered successfully", async () => {
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
    const text = screen.getByText("Candidate Information");
    expect(text).toBeInTheDocument();
    fireEvent.click(text);
    const elements = screen.getAllByText("John Smith");
    expect(elements[1]).toBeInTheDocument();
  });
  test("error handling", async () => {
    server.use(
      rest.get(
        `${BASE_URl_BACKEND}/candidates/:candidateId`,
        (req, res, ctx) => {
          const { candidateId } = req.params;
          return res(ctx.status(500));
        }
      ),
      rest.get(
        `${BASE_URl_BACKEND}/reports/:candidateId`,
        (req, res, ctx) => {
          const { candidateId } = req.params;
          return res(ctx.status(500));
        }
      )
    );
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );
    const error = await screen.findByText("Error...");
    expect(error).toBeInTheDocument();
  });
  test("axios put error handling", async () => {
    server.use(
      rest.patch(
        `${BASE_URl_BACKEND}/reports/:candidateId`,
        (req, res, ctx) => {
          const { candidateId } = req.params;
          return res(ctx.status(500));
        }
      )
    );
    render(
      <BrowserRouter>
        <CandidateInfoPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
    const button = screen.getByRole("button", { name: "Engage" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const error = await screen.findByText("Error...");
    expect(error).toBeInTheDocument();
  });
});
