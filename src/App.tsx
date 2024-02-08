import { AppShell, MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "./types/types";
import { theme } from "./theme";
import HomePage from "./pages/General/Homepage";
import Header from "./components/AppShell/Header";
import CharacterMaker from "./pages/Characters/CharacterMaker";
import ItemMaker from "./pages/Items/ItemMaker";
import LocationMaker from "./pages/Locations/LocationMaker";
import Gallery from "./pages/Gallery/Gallery";
import TableView from "./pages/TableView/TableView";

const links: Link[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/character/maker",
    text: "Character Maker",
  },
  {
    href: "/item/maker",
    text: "Item Maker",
  },
  {
    href: "/location/maker",
    text: "Location Maker",
  },
  {
    href: "/gallery",
    text: "Gallery View",
  },
];

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: 60 }}>
          <AppShell.Header withBorder className="flex flex-between">
            <Header brand="RPG App" links={links} />
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
