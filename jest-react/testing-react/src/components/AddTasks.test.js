import { render, screen } from "@testing-library/react";
import AddTasks from "./AddTasks";

describe("Add Tasks", () => {
  it("Render the add task component", () => {
    render(<AddTasks />);
    const inputBox = screen.getByTestId("inputbox");
    expect(inputBox).toBeInTheDocument();
  });

  it("Check the entered input text matches appears as it is", () => {
    render(<AddTasks />);
    const inputBox = screen.getByTestId("inputbox");
    inputBox.textContent = "Test";
    const inputText = screen.getByTestId("inputbox").textContent;

    expect(inputText).toBe("Test");
  });
});
