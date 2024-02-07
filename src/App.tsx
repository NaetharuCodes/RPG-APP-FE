import { AppShell, MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme.ts";
import CharacterMaker from "./pages/Characters/CharacterMaker.tsx";
import HomePage from "./pages/General/Homepage.tsx";
import ItemMaker from "./pages/Items/ItemMaker.tsx";
import LocationMaker from "./pages/Locations/LocationMaker.tsx";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: 60 }}>
          <AppShell.Header>
            <Text>RPG App</Text>
          </AppShell.Header>
          <AppShell.Main style={{ padding: 200 }}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/character/maker" element={<CharacterMaker />} />
              <Route path="/item/maker" element={<ItemMaker />} />
              <Route path="/location/maker" element={<LocationMaker />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
