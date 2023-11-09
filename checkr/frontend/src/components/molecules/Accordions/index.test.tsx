import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'
import { LOGOUT_TEXT, candidateInfo } from "../../../constants"
import InformationCard from "."
import AccordionCards from "."


describe("Accordion cards suits", () => {
    it("Accordion Card successfull", () => {
        render(<AccordionCards title="Candidate Information" cardData={candidateInfo} />)

        const text = screen.getByText("Candidate Information");
        expect(text).toBeInTheDocument();   
    })
    it("candidate Information successfull", () => {
        render(<AccordionCards title="Candidate Information" cardData={candidateInfo} />)

        const text = screen.getByText("Candidate Information");
        expect(text).toBeInTheDocument(); 
        
        const accordion = screen.getByRole("button");
        expect(accordion).toBeInTheDocument();
        fireEvent.click(accordion);

        expect(screen.getByText(candidateInfo[0].text)).toBeInTheDocument();
    })
})