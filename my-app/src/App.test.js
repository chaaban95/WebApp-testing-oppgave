import { render } from "@testing-library/react";
import App from "./App";

test("if the text has Halden", () => {
  render(<App />);
  const whatever = document.querySelector("h1");
  expect(whatever).toHaveTextContent("My favorite city is Halden!");
});
