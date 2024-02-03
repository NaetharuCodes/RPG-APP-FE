import { AppShell, MantineProvider, Text } from "@mantine/core";
import { theme } from "./theme.ts";
import "@mantine/core/styles.css";
import CharacterMaker from "./pages/Characters/CharacterMaker.tsx";

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <Text>RPG App</Text>
        </AppShell.Header>
        <AppShell.Main style={{ padding: 200 }}>
          <CharacterMaker />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
