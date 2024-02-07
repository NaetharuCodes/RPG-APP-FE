import { Title, Grid } from "@mantine/core";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";

const Gallery = () => {
  return (
    <div>
      <Title>This is the Gallery</Title>
      <Grid gutter="lg" justify="center">
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
      </Grid>
    </div>
  );
};

export default Gallery;
