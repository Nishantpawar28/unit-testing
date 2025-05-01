import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = {
      id: 11,
      name: "lisa",
    };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render button if isAdmin is passed as true", () => {
    const user = {
      id: 11,
      name: "lisa",
      isAdmin: true,
    };

    render(<UserAccount user={user} />);

    const editButton = screen.getByRole("button");
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/edit/i);
  });

  it("should not render button if isAdmin is passed as false", () => {
    const user = {
      id: 11,
      name: "lisa",
      isAdmin: false,
    };

    render(<UserAccount user={user} />);

    const editButton = screen.queryByRole("button");
    expect(editButton).not.toBeInTheDocument();
  });
});
