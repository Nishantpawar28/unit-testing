import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      button: screen.getByRole("button"),
      checkbox: screen.getByRole("checkbox"),
    };
  };

  it("should render correct text and initial state", () => {
    const {heading, button, checkbox} = renderComponent()

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when checkbox is checked", async () => {
    const {button, checkbox} = renderComponent()

    const user = userEvent.setup();
    await user.click(checkbox); // click function returns promise

    expect(button).toBeEnabled(); //Should enable on first click

    await user.click(checkbox);
    expect(button).toBeDisabled(); //Should disable on second click
  });
});
