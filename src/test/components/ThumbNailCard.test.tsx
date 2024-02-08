import { render, screen } from "@testing-library/react";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import { MantineProvider } from "@mantine/core";
import { Category } from "../../enums/categories";

beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

describe("ThumbNailCard component tests", () => {
  it("should render without crashing", () => {
    render(
      <MantineProvider>
        <ThumbnailCard name="test card" category={Category.Character} />
      </MantineProvider>
    );
    expect(screen.getByText("test card")).toBeVisible();
  });

  it("should display the category text", () => {
    render(
      <MantineProvider>
        <ThumbnailCard name="test card" category={Category.Character} />
      </MantineProvider>
    );
    expect(screen.getByText("character")).toBeVisible();
  });
});
