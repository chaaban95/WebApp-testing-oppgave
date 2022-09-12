import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("if the text has Halden", () => {
  render(<App />);
  const whatever = screen.getByRole("heading", { level: 1 });
  expect(whatever).toHaveTextContent("My favorite city is Halden!");
});
