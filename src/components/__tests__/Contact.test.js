import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("should load contact page", () => {
  test("renders Contact page", () => {
    render(<Contact />);
    const textElement = screen.getByText(/This is Contact/i);
    expect(textElement).toBeInTheDocument();
  });

  it("", () => {
    render(<Contact />);

    const headings = screen.getAllByRole("heading");
    //console.log(headings);
    expect(headings.length).toBe(1);
  });
});
