import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { ThemeProvider } from "../app/theme-provider";

// Simulación de window.matchMedia
beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

describe("Home page", () => {
  it("render name", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    const elements = screen.getAllByText(/Andres Fernandez/i);
    const heading = elements.find((el) => el.tagName.toLowerCase() === "h1");
    expect(heading).toBeInTheDocument();
  });
  it("render about", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    const elements = screen.getAllByText(/Sobre mí/i);
    const heading = elements.find((el) => el.tagName.toLowerCase() === "h2");
    expect(heading).toBeInTheDocument();
  });
  it("render interests", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    const elements = screen.getAllByText(/Intereses/i);
    const heading = elements.find((el) => el.tagName.toLowerCase() === "h2");
    expect(heading).toBeInTheDocument();
  });
  it("render contact", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );
    const elements = screen.getAllByText(/Contacto/i);
    const heading = elements.find((el) => el.tagName.toLowerCase() === "h2");
    expect(heading).toBeInTheDocument();
  });
});
