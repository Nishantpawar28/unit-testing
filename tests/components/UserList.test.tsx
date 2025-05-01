import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no user text if the users array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render links with user name", () => {
    const users: User[] = [
      {
        id: 1,
        name: "nishu",
      },
      { id: 2, name: "lisa" },
    ];

    render(<UserList users={users} />);

    users.forEach((user : User) => {
       const link = screen.getByRole("link",  { name: user.name });
       expect(link).toBeInTheDocument();
       expect(link).toHaveAttribute("href", `/users/${user.id}`)
       
      /* expect(link).toHaveAttribute("href", expect.stringContaining('/users')) 
      for partial href value check */
    })
  });
});
