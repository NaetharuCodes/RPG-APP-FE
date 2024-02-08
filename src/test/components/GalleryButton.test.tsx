import { render, screen } from "@testing-library/react";
import GalleryButton from "../../components/GalleryButton/GalleryButton";
import { MantineProvider } from "@mantine/core";

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

const galleryButtonTestFunction = () => {};

describe("GalleryButton component tests", () => {
  it("should render without crashing", () => {
    render(
      <MantineProvider>
        <GalleryButton
          onClick={() => galleryButtonTestFunction}
          text="test gallery button"
          status
        />
      </MantineProvider>
    );
    expect(screen.getByText("test gallery button")).toBeVisible();
  });
});
