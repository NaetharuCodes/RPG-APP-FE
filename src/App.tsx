import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import CharacterMaker from "./pages/Characters/CharacterMaker";

function App() {
  return (
    <MantineProvider theme={theme}>
      <CharacterMaker />
    </MantineProvider>
  );
}

export default App;
