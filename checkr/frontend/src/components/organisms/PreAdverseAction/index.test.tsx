import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PreAdverseActionNotice } from ".";
import { BASE_URl_BACKEND, PRE_ADVERSE_MESSAGE, PreAdverseActionNoticeData } from "../../../constants";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("Pre Adverse Action Notice test suits", () => {
  it("pre adverseaction render successfull", () => {
    render(
      <BrowserRouter>
        <PreAdverseActionNotice />
      </BrowserRouter>
    );

    const text = screen.getByText("From:");
    expect(text).toBeInTheDocument();
  });
  it("checkbox rendering successfully", () => {
    render(
      <BrowserRouter>
        <PreAdverseActionNotice />
      </BrowserRouter>
    );

    const checkboxs = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxs[0]);
    fireEvent.click(checkboxs[0]);
    fireEvent.click(checkboxs[1]);
  });

  it("preview button rendering successfully", async () => {
    render(
      <BrowserRouter>
        <PreAdverseActionNotice />
      </BrowserRouter>
    );

    const checkboxs = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxs[0]);

    const previewButton = screen.getByRole("button", {
      name: PreAdverseActionNoticeData.PREVIEW_NOTICE_BUTTON,
    });
    expect(previewButton).toBeInTheDocument();
    fireEvent.click(previewButton);

    const submitButton = screen.getByRole("button", {
      name: "Submit Notice",
    });
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    expect(screen.getByText(PRE_ADVERSE_MESSAGE)).toBeInTheDocument();
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
        <PreAdverseActionNotice />
      </BrowserRouter>
    );

    const checkboxs = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxs[0]);

    const previewButton = screen.getByRole("button", {
      name: PreAdverseActionNoticeData.PREVIEW_NOTICE_BUTTON,
    });
    expect(previewButton).toBeInTheDocument();
    fireEvent.click(previewButton);

    const submitButton = screen.getByRole("button", {
      name: "Submit Notice",
    });
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);

    const error = await screen.findByText("Error...");
    expect(error).toBeInTheDocument();
  });
});
