import { render, screen } from "@testing-library/react"
import React from "react"
import Chip from "."

describe("Chip atom test suits", () => {
    it("chip rendering successfully", () => {
        render(<Chip label={"CLOSE"}></Chip>)
        const chip = screen.getByTestId("chip");
        expect(chip).toBeInTheDocument();

    })
    it("checking for the label", () => {
        render(<Chip label={"CLOSE"}></Chip>)
        const chipLabel = screen.getByText("CLOSE");
        expect(chipLabel).toBeInTheDocument();
    })
})