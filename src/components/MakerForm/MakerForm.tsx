import { Button, TextInput, Textarea } from "@mantine/core";
import { CharacterDataType } from "../../types/types";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import CharacterSheet from "../CharacterSheet/CharacterSheet";
import { MakerOptions } from "../../enums/categories";

interface MakerFormProps {
  options: MakerOptions;
}

const MakerForm = ({ options }: MakerFormProps) => {
  const [characterData, setCharacterData] = useState<CharacterDataType | null>(
    null
  );

  const form = useForm<CharacterDataType>({
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
    console.log(options);
  }, [options]);

  const route =
    options === MakerOptions.AI
      ? "http://localhost:3000/api/character/ai"
      : "http://localhost:3000/api/character/manual";

  const handleSubmit = (values: CharacterDataType) => {
    fetch(route, {
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
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput label="Theme" {...form.getInputProps("theme")} />
        <TextInput label="Character Name" {...form.getInputProps("name")} />
        <TextInput label="Species" {...form.getInputProps("species")} />
        <TextInput label="Gender" {...form.getInputProps("gender")} />
        <TextInput label="Age" {...form.getInputProps("age")} />
        <TextInput label="Role" {...form.getInputProps("role")} />
        {options === MakerOptions.AI ? (
          <>
            <TextInput
              label="Appearance"
              {...form.getInputProps("appearance")}
            />
            <TextInput label="History" {...form.getInputProps("history")} />
          </>
        ) : (
          <>
            <Textarea
              label="Appearance"
              {...form.getInputProps("appearance")}
            />
            <Textarea label="History" {...form.getInputProps("history")} />
          </>
        )}

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

export default MakerForm;
