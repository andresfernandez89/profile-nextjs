import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home />);
    expect(screen.getByText("Nombre del Usuario")).toBeInTheDocument();
  });
});
