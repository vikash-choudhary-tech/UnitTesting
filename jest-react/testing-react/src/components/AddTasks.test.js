import { render, screen } from "@testing-library/react";
import AddTasks from "./AddTasks";

describe("Add Tasks", () => {
  it("Render the add task component", () => {
    render(<AddTasks />);
    const inputBox = screen.getByTestId("inputbox");
    expect(inputBox).toBeInTheDocument();
  });
});
