import { useState } from "react";
import { locationDataType } from "../../types/types";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";
import LocationSheet from "../../components/LocationSheet/LocationSheet";

const LocationMaker = () => {
  const [locationData, setLocationData] = useState<locationDataType | null>(
    null
  );

  const form = useForm<locationDataType>({
    initialValues: {
      theme: "",
      name: "",
      appearance: "",
      history: "",
    },
  });

  const handleSubmit = (values: locationDataType) => {
    fetch("http://localhost:3000/api/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => setLocationData(data.locationData))
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      <h1>Location Maker Page</h1>
      <p>
        Fill out this form to have your location built. No need to add in all
        the details now. Just fill out the parts you want and the AI will ad lib
        the rest.
      </p>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput label="Theme" {...form.getInputProps("theme")} />
        <TextInput label="Location Name" {...form.getInputProps("name")} />
        <TextInput label="Appearance" {...form.getInputProps("appearance")} />
        <TextInput label="History" {...form.getInputProps("history")} />

        <Button style={{ marginTop: 20 }} type="submit">
          Submit
        </Button>
      </form>

      <section>{locationData && <LocationSheet data={locationData} />}</section>
    </>
  );
};

export default LocationMaker;
