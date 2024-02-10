import { Box, Image, Switch, Text, Title } from "@mantine/core";
import { useState } from "react";
import { MakerType } from "../../types/types";
import bannerImage from "../../assets/RPG Scene 0003.webp";
import { MakerOptions } from "../../enums/categories";
import MakerForm from "../../components/MakerForm/MakerForm";

const CharacterMaker = () => {
  const [makerMethod, setMakerMethod] = useState<MakerType>({
    selection: MakerOptions.Manual,
  });

  const handleToggleMakerType = () => {
    setMakerMethod(
      makerMethod.selection == MakerOptions.Manual
        ? { selection: MakerOptions.AI }
        : { selection: MakerOptions.Manual }
    );
  };

  return (
    <>
      <Title className="margin-large text-justify">
        Welcome to the Character Creator - Where Your Heroes Come to Life!
      </Title>
      <Image src={bannerImage} alt="cyberpunk-rpg-banner" height={180} />
      <Text className="margin-large text-justify text-small">
        Dive into the heart of your RPG adventures with our Character Creator, a
        dynamic tool designed to breathe life into your imagination. Whether
        you're crafting a valiant knight, a cunning sorcerer, or a rogue AI with
        a heart of gold, this is where your journey begins.
      </Text>
      <Text className="margin-large text-justify text-small">
        <strong>Craft Your Legend: </strong>
        Choose the manual path to meticulously detail every aspect of your
        character, from their backstory to their abilities. Perfect for those
        who have a clear vision and wish to bring it to intricate life.
      </Text>
      <Text className="margin-large text-justify text-small">
        <strong> Ignite Creativity with AI: </strong>
        Embark on a voyage of discovery with our AI-driven creator. Generate a
        character with a spark of AI ingenuity, then remix and refine to your
        heart's content. It's ideal for when you're looking for inspiration or a
        surprising twist to your narrative.
      </Text>

      <Box
        role="div"
        className="flex flex-center margin-large padding-large flex-col text-justify"
      >
        <Title order={6} className="margin-large">
          Choose Your Creation Method
        </Title>
        <Switch
          size="xl"
          onLabel="AI"
          offLabel="Manual"
          onChange={() => handleToggleMakerType()}
        />
      </Box>

      <MakerForm options={makerMethod.selection} />
    </>
  );
};

export default CharacterMaker;
