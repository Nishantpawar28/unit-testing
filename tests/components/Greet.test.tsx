import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with passed name prop if prop is passed to the component", () => {
    render(<Greet name="Nishant" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/nishant/i)
  });

  it("should render Button when name prop is not passed to the component", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i)
  });
});
