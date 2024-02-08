import { render, screen } from "@testing-library/react";
import CharacterSheet from "../../components/CharacterSheet/CharacterSheet";
import { MantineProvider } from "@mantine/core";
import { characterDataType } from "../../types/characterTypes";

const characterSheetTestData: characterDataType = {
  theme: "Test Theme",
  name: "Test Name",
  age: "Test Age",
  species: "Test Species",
  gender: "Test Gender",
  role: "Test Role",
  appearance: "Test Appearance",
  history: "Test History",
};

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

describe("CharacterSheet component tests", () => {
  it("should render without crashing", () => {
    render(
      <MantineProvider>
        <CharacterSheet data={characterSheetTestData} />
      </MantineProvider>
    );
    expect(screen.getByText("CHARACTER SHEET")).toBeInTheDocument();
  });

  it("displays each of the character fields", () => {
    render(
      <MantineProvider>
        <CharacterSheet data={characterSheetTestData} />
      </MantineProvider>
    );
    expect(screen.getByText("Test Theme")).toBeVisible();
    expect(screen.getByText("Test Name")).toBeVisible();
    expect(screen.getByText("Test Age")).toBeVisible();
    expect(screen.getByText("Test Gender")).toBeVisible();
    expect(screen.getByText("Test Role")).toBeVisible();
    expect(screen.getByText("Test Appearance")).toBeVisible();
    expect(screen.getByText("Test History")).toBeVisible();
  });
});
