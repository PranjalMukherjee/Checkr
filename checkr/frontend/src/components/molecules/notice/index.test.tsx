import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'
import { NoticeCard } from "."
import { PRE_ADVERACTION } from "../../../constants"


describe("Notice pop up test suits", () => {
    it("Notice popup successfull", () => {
        render(<NoticeCard preAdverAction={PRE_ADVERACTION}  />)
        
        const text = screen.getByText("Assault Domestic Violence");
        expect(text).toBeInTheDocument();
    })
    it("close button render successful", () => {
        const handleClick = jest.fn();
        render(<NoticeCard preAdverAction={PRE_ADVERACTION} handleClose={handleClick}/>)
        
        const closeButton = screen.getByTestId("close-button");
        expect(closeButton).toBeInTheDocument();
        fireEvent.click(closeButton);

    })
    it("submit button render successful", () => {
        const handleClick = jest.fn();
        render(<NoticeCard preAdverAction={PRE_ADVERACTION}  handleSubmit={handleClick}/>)

        const submitButton = screen.getByRole("button",{
            name:"Submit Notice"
        })
        expect(submitButton).toBeInTheDocument();
        fireEvent.click(submitButton);   
        
    })
    
})