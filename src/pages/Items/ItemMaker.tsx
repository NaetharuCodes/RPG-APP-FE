import { useState } from "react";
import { itemDataType } from "../../types/types";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";
import ItemSheet from "../../components/ItemSheet/ItemSheet";

const ItemMaker = () => {
  const [itemData, setItemData] = useState<itemDataType | null>(null);

  const form = useForm<itemDataType>({
    initialValues: {
      theme: "",
      name: "",
      appearance: "",
      history: "",
    },
  });

  const handleSubmit = (values: itemDataType) => {
    fetch("http://localhost:3000/api/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => setItemData(data.itemData))
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      <h1>Location Maker Page</h1>
      <p>
        Fill out this form to have your item built. No need to add in all the
        details now. Just fill out the parts you want and the AI will ad lib the
        rest.
      </p>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput label="Theme" {...form.getInputProps("theme")} />
        <TextInput label="Item Name" {...form.getInputProps("name")} />
        <TextInput label="Appearance" {...form.getInputProps("appearance")} />
        <TextInput label="History" {...form.getInputProps("history")} />

        <Button style={{ marginTop: 20 }} type="submit">
          Submit
        </Button>
      </form>

      <section>{itemData && <ItemSheet data={itemData} />}</section>
    </>
  );
};

export default ItemMaker;
