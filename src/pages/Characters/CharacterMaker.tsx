import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import CharacterSheet, {
  characterDataType,
} from "../../components/CharacterSheet/CharacterSheet";
import { useState } from "react";

interface CharacterFormData {
  theme: string;
  name: string;
  species: string;
  gender: string;
  age: string;
  role: string;
  appearance: string;
  history: string;
}

const CharacterMaker = () => {
  const [characterData, setCharacterData] = useState<characterDataType | null>(
    null
  );

  const form = useForm<CharacterFormData>({
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

  const handleSubmit = (values: CharacterFormData) => {
    fetch("http://localhost:3000/api/character", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => setCharacterData(data.characterData))
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <>
      <h1>Character Maker Page</h1>
      <p>
        Fill out this form to have your character built. No need to add in all
        the details now. Just fill out the parts you want and the AI will ad lib
        the rest.
      </p>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
