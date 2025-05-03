import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const truncatedText = longText.substring(0, 255) + "...";

  it("should render text if length is less than limit", () => {
    const text = "Hi hello lorem";
    render(<ExpandableText text={text} />);

    const article = screen.getByText(text);
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(text);
  });

  it("should render truncated text if text length is longer than limit", () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });

  it("should render show more button", () => {
    render(<ExpandableText text={longText} />);

    const showMoreButton = screen.getByRole("button");
    expect(showMoreButton).toHaveTextContent(/show more/i);
  });

  it("should expand text when Show More button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    const user = userEvent.setup();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
    await user.click(button);


    expect(button).toHaveTextContent(/less/i);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it("should collapse text when Show Less button is clicked", async () => {
    render(<ExpandableText text={longText} />);

    const user = userEvent.setup();
    const showMorebutton = screen.getByRole("button", {name: /more/i});
    await user.click(showMorebutton);

    const showLessbutton = screen.getByRole("button", {name: /less/i});
    await user.click(showLessbutton);

    expect(showMorebutton).toHaveTextContent(/more/i);
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
