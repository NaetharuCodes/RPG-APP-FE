import { Card, Image, Text } from "@mantine/core";
import sampleImage from "../../assets/Cyberpunk Character 0002.webp";
import { Category } from "../../enums/categories";

interface ThumbnailCardProps {
  name: string;
  category: Category;
}

const ThumbnailCard = ({ name, category }: ThumbnailCardProps) => {
  return (
    <a
      href="/viewer:id"
      style={{
        margin: 20,
      }}
    >
      <Card
        padding="lg"
        radius={6}
        shadow="box-shadow"
        style={{ width: 160, padding: 20 }}
      >
        <Text size="xs" lineClamp={1} style={{ marginTop: 12 }}>
          {category}
        </Text>
        <Image
          src={sampleImage}
          height={160}
          fit="contain"
          alt="rpg-character"
        />

        <Text size="xs" lineClamp={1} style={{ marginTop: 12 }}>
          {name}
        </Text>
      </Card>
    </a>
  );
};

export default ThumbnailCard;
