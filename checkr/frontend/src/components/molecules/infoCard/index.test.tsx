import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'
import { LOGOUT_TEXT, candidateInfo } from "../../../constants"
import InformationCard from "."


describe("Information Card test suits", () => {
    it("Information Card successfull", () => {
        render(<InformationCard title={candidateInfo[0].title} text={candidateInfo[0].text} src={candidateInfo[0].icon} />)
        
        const text = screen.getByText(candidateInfo[0].title);
        expect(text).toBeInTheDocument();

        const content = screen.getByText(candidateInfo[0].text);
        expect(content).toBeInTheDocument();

        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    })
})