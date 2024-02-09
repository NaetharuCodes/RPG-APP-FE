import { Title, Grid, Group, Input } from "@mantine/core";
import { useState } from "react";
import { Category } from "../../enums/categories";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import GalleryButton from "../../components/GalleryButton/GalleryButton";
import "./Gallery.css";

const Gallery = () => {
  const [filterCategories, setFilterCategories] = useState({
    character: true,
    item: true,
    location: true,
  });

  const [filterString, setFilterString] = useState<string | null>(null);

  const handleToggleCategory = (category: Category): void => {
    setFilterCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value);
  };

  const dummyData = [
    { id: "001", name: "Character One", category: Category.Character },
    { id: "002", name: "Character Two", category: Category.Character },
    { id: "003", name: "Character Three", category: Category.Character },
    { id: "004", name: "Character Four", category: Category.Character },
    { id: "005", name: "Item One", category: Category.Item },
    { id: "006", name: "Item Two", category: Category.Item },
    { id: "007", name: "Item Three", category: Category.Item },
    { id: "008", name: "Item Four", category: Category.Item },
    { id: "009", name: "Item One", category: Category.Location },
    { id: "010", name: "Location Two", category: Category.Location },
    { id: "011", name: "Location Three", category: Category.Location },
    { id: "012", name: "Location Four", category: Category.Location },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title>This is the Gallery</Title>

      <Group id="gallery-buttons">
        <GalleryButton
          onClick={() => handleToggleCategory(Category.Character)}
          text="Toggle View Characters"
          status={filterCategories.character}
        />
        <GalleryButton
          onClick={() => handleToggleCategory(Category.Item)}
          text="Toggle View Items"
          status={filterCategories.item}
        />
        <GalleryButton
          onClick={() => handleToggleCategory(Category.Location)}
          text="Toggle View Locations"
          status={filterCategories.location}
        />
      </Group>
      <Input onChange={(e) => handleSearchChange(e)} />

      <Grid gutter="lg" justify="flex-start" align="flex-start">
        {dummyData.map((card) => {
          if (!filterCategories[card.category]) return;
          if (filterString && !card.name.includes(filterString)) return;
          return (
            <ThumbnailCard
              key={card.id}
              name={card.name}
              category={card.category}
            />
          );
        })}
        <Grid.Col span="content"></Grid.Col>
      </Grid>
    </div>
  );
};

export default Gallery;
