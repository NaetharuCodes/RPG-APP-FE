import { Image, Text, Title } from "@mantine/core";
import coverImage from "../../assets/RPG Scene 0001.webp";

const HomePage = () => {
  return (
    <>
      <Title order={1} style={{ marginBottom: 20, textAlign: "justify" }}>
        Welcome to RPG App – Your Ultimate Companion for RPG Creativity!
      </Title>
      <Image src={coverImage} height={200} />
      <Text className="padding-small">
        <strong>Unlock a Universe of Imagination:</strong>
        RPG App is the premier digital toolkit designed for passionate players
        and game masters who yearn to breathe life into their RPG adventures.
        Whether you're delving into the depths of ancient dungeons, navigating
        the neon-lit streets of a cyberpunk city, or exploring distant galaxies,
        RPG App is your bridge to countless worlds.
      </Text>

      <section>
        <Title order={2} style={{ marginTop: 20 }}>
          Features at a Glance:
        </Title>
        <Text className="padding-small">
          <strong>Character Creation: </strong>
          Craft detailed characters with ease. From heroic warriors and cunning
          mages to cybernetic hackers and spacefaring explorers, your character
          awaits. Customize abilities, backstory, equipment, and more to fit any
          theme or setting.
        </Text>
        <Text className="padding-small">
          <strong>Item Forge: </strong>
          Equip your adventure with an extensive library of items. Swords,
          spells, cybernetics, or starships - if you can imagine it, you can
          create it. Tailor items not just for functionality, but with stories
          and secrets of their own.
        </Text>
        <Text className="padding-small">
          <strong>Location Designer: </strong>
          Construct immersive worlds with our intuitive tools. Design majestic
          castles, dystopian metropolises, or serene alien landscapes. Each
          location can be a backdrop for your tales or the centerpiece of your
          narrative.
        </Text>
      </section>

      <section>
        <Title order={2} style={{ marginTop: 20 }}>
          Any Theme, Any Setting:
        </Title>
        <Text className="padding-small">
          RPG App is built for versatility. Our platform supports an expansive
          range of themes and settings, including but not limited to:
        </Text>
        <ul>
          <li>Fantasy</li>
          <li>Cyberpunk</li>
          <li>Science Fiction</li>
          <li>Historical</li>
          <li>Horror</li>
          <li>And many more!</li>
        </ul>
      </section>

      <section>
        <Title order={2} style={{ marginTop: 20 }}>
          Collaborate and Share:
        </Title>
        <Text className="padding-small">
          Join our community of creators. Share your creations, get feedback,
          and collaborate with others. RPG App is more than a tool; it's a
          gateway to a community of imaginative storytellers.
        </Text>
      </section>

      <section>
        <Title order={2} style={{ marginTop: 20 }}>
          Your Adventure Begins Now:
        </Title>
        <Text className="padding-small">
          Don't let complexity stifle your creativity. With RPG App, the power
          to create is at your fingertips. Whether you're a seasoned game master
          or a newcomer to the world of RPGs, our platform offers the resources
          you need to bring your most ambitious RPG ideas to life.
        </Text>
      </section>

      <section>
        <Title order={2} style={{ marginTop: 20 }}>
          Join RPG App Today:{" "}
        </Title>
        <Text className="padding-small">
          Embrace the adventure. Sign up now and transform your RPG experiences.
          The only limit is your imagination.
        </Text>
      </section>
    </>
  );
};

export default HomePage;
