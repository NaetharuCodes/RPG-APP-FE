import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const CharacterMaker = () => {
  const form = useForm({
    initialValues: {
      theme: "",
      name: "",
      species: "",
      grender: "",
      age: "",
      role: "",
      history: "",
      appearance: "",
    },
  });

  return (
    <div>
      <h1>Character Maker Page</h1>
      <p>
        Welcome to the Character Maker Page. Fill out the form below to create
        your character.
      </p>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Theme" {...form.getInputProps("theme")} />
        <TextInput label="Character Name" {...form.getInputProps("name")} />
        <TextInput label="Species" {...form.getInputProps("species")} />
        <TextInput label="Gender" {...form.getInputProps("gender")} />
        <TextInput label="Age" {...form.getInputProps("age")} />
        <TextInput label="Role" {...form.getInputProps("role")} />
        <TextInput label="History" {...form.getInputProps("history")} />
        <TextInput label="Appearance" {...form.getInputProps("appearance")} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CharacterMaker;
