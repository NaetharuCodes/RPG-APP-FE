import { Title, Grid, Group, Button } from "@mantine/core";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import { useState } from "react";
import { Category } from "../../enums/categories";

const Gallery = () => {
  const [filterCategories, setFilterCategories] = useState({
    character: true,
    item: true,
    location: true,
  });

  const handleToggleCategory = (category: Category): void => {
    console.log(category);
    setFilterCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
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
    <div>
      <Title>This is the Gallery</Title>

      <Group>
        <Button onClick={() => handleToggleCategory(Category.Character)}>
          Toggle View Characters
        </Button>
        <Button onClick={() => handleToggleCategory(Category.Item)}>
          Toggle View Items
        </Button>
        <Button onClick={() => handleToggleCategory(Category.Location)}>
          Toggle View Locations
        </Button>
      </Group>

      <Grid gutter="lg" justify="flex-start" align="flex-start">
        {dummyData.map((card) => {
          if (!filterCategories[card.category]) return;
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
