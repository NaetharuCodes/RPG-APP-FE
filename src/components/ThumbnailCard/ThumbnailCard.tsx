import { Card, Image, Text } from "@mantine/core";
import sampleImage from "../../assets/Cyberpunk Character 0002.webp";

const ThumbnailCard = () => {
  return (
    <a
      href="/viewer:id"
      style={{
        margin: 20,
        border: "2px solid grey",
        borderRadius: 10,
      }}
    >
      <Card
        padding="lg"
        radius={6}
        shadow="box-shadow"
        style={{ width: 160, padding: 20 }}
      >
        <Image
          src={sampleImage}
          height={160}
          fit="contain"
          alt="rpg-character"
        />

        <Text size="xs" lineClamp={1} style={{ marginTop: 12 }}>
          Molly Millions, Street Samurai
        </Text>
      </Card>
    </a>
  );
};

export default ThumbnailCard;
