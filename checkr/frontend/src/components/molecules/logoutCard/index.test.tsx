import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'
import { LogoutCard } from "."
import { LOGOUT_TEXT } from "../../../constants"


describe("Notice pop up test suits", () => {
    it("Notice popup successfull", () => {
        render(<LogoutCard  />)
        
        const text = screen.getByText(LOGOUT_TEXT);
        expect(text).toBeInTheDocument();
    })
    it("cancel button successful",()=>{
        const handleClick = jest.fn();
        render(<LogoutCard handleCancel={handleClick} />)

        const cancelButton = screen.getByRole("button",{ name:"Cancel"});
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);
    })
    it("logout button successful",()=>{
        const handleClick = jest.fn();
        render(<LogoutCard handleLogout={handleClick} />)

        const logoutButton = screen.getByRole("button",{ name:"Logout"});
        expect(logoutButton).toBeInTheDocument();
        fireEvent.click(logoutButton);
    })
})