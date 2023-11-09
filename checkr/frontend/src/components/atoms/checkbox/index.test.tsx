import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'
import Checkbox from "."


describe("checkbox test suits", () => {
    it("checkbox rendering correctly", () => {
        render(<Checkbox onChange={()=> {}} />)
        const checkBox = screen.getByTestId("checkbox");
        expect(checkBox).toBeInTheDocument();

        const checkBoxRole = screen.getByRole("checkbox");
        expect(checkBoxRole).toBeInTheDocument();
    })
    it("checkbox onChange function testing", ()=> {
        const handleClick = jest.fn();
        render(<Checkbox onChange={handleClick}></Checkbox>)

        const checkBox = screen.getByRole("checkbox");
        fireEvent.click(checkBox);
        expect(checkBox).toBeChecked();
    })
})