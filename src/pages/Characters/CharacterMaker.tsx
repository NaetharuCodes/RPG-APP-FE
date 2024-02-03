import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import CharacterSheet, {
  characterDataType,
} from "../../components/CharacterSheet/CharacterSheet";
import { useEffect, useState } from "react";

const CharacterMaker = () => {
  const [characterData, setCharacterData] = useState<characterDataType | null>(
    null
  );

  const form = useForm({
    initialValues: {
      theme: "",
      name: "",
      species: "",
      gender: "",
      age: "",
      role: "",
      appearance: "",
      history: "",
    },
  });

  useEffect(() => {
    setCharacterData({
      theme: "Cyberpunk",
      name: "Case",
      species: "Human",
      gender: "Male",
      age: "22",
      role: "Cyber Jocky",
      appearance: "A skinny man dressed in simple clothing.",
      history:
        "Case was born in Seattle. He worked as a hacker for a criminal organization stealing secrets from corps. But he chose to double cross them and paid the price...",
    });
  }, []);

  return (
    <>
      <h1>Character Maker Page</h1>
      <p>
        Fill out this form to have your character built. No need to add in all
        the details now. Just fill out the parts you want and the AI will ad lib
        the rest.
      </p>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Theme" {...form.getInputProps("theme")} />
        <TextInput label="Character Name" {...form.getInputProps("name")} />
        <TextInput label="Species" {...form.getInputProps("species")} />
        <TextInput label="Gender" {...form.getInputProps("gender")} />
        <TextInput label="Age" {...form.getInputProps("age")} />
        <TextInput label="Role" {...form.getInputProps("role")} />
        <TextInput label="Appearance" {...form.getInputProps("appearance")} />
        <TextInput label="History" {...form.getInputProps("history")} />

        <Button style={{ marginTop: 20 }} type="submit">
          Submit
        </Button>
      </form>
      <section>
        {characterData && <CharacterSheet data={characterData} />}
      </section>
    </>
  );
};

export default CharacterMaker;
