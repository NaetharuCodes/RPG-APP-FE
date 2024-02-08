import { render, screen } from "@testing-library/react";
import Header from "../../components/AppShell/Header";

describe("Header component tests", () => {
  it("should render without crashing", () => {
    render(<Header />);
    expect(screen.getByText("RPG APP")).toBeInTheDocument();
  });

  const links = [
    { text: "Home", href: "/" },
    { text: "Characters", href: "/character/maker" },
    { text: "Locations", href: "/location/maker" },
    { text: "Items", href: "/item/maker" },
    { text: "Gallery", href: "/gallery" },
  ];

  links.forEach(({ text, href }) => {
    it(`has a link to ${text} with the correct path`, () => {
      render(<Header />);
      const linkElement = screen.getByRole("link", { name: text });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });
});
