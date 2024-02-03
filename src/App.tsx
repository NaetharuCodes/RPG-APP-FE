import { AppShell, MantineProvider, Text } from "@mantine/core";
import { theme } from "./theme.ts";
import CharacterMaker from "./pages/Characters/CharacterMaker";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Text>RPG App</Text>
        </AppShell.Header>
        <AppShell.Main>
          <CharacterMaker />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
