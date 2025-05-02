import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';



describe("TermsAndConditions", () => {
    it("should render heading", () => {
        render(<TermsAndConditions />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Terms & Conditions")
    })

    it("checks if input box is unchecked" , () => {
        render(<TermsAndConditions />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked()
    })

    it("checks if button is disabled initially" , () => {
        render(<TermsAndConditions />);
        const checkbox = screen.getByRole("button");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).toBeDisabled();
    })

    it("should enable the button when checkbox is checked" , async () => {
        render(<TermsAndConditions />);
        
        const user = userEvent.setup();
        const checkbox = screen.getByRole("checkbox");
        await user.click(checkbox)     // click function returns promise

        expect(screen.getByRole("button")).toBeEnabled();  //Should enable on first click

        
        await user.click(checkbox)
        expect(screen.getByRole("button")).toBeDisabled();  //Should disable on second click
    })
})