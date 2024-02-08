import { AppShell, MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme.ts";
import CharacterMaker from "./pages/Characters/CharacterMaker.tsx";
import HomePage from "./pages/General/Homepage.tsx";
import ItemMaker from "./pages/Items/ItemMaker.tsx";
import LocationMaker from "./pages/Locations/LocationMaker.tsx";
import Header from "./components/AppShell/Header.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import TableView from "./pages/TableView/TableView.tsx";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: 60 }}>
          <AppShell.Header withBorder className="flex flex-between">
            <Header />
          </AppShell.Header>
          <AppShell.Main className="margin-large-h">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/character/maker" element={<CharacterMaker />} />
              <Route path="/item/maker" element={<ItemMaker />} />
              <Route path="/location/maker" element={<LocationMaker />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/table" element={<TableView />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
