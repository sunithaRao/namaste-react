import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us test cases", () => {
  it("Shuold load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Shuold load button us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Shuold load 2 input boxes.", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
