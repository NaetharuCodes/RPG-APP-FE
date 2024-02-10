import { Box, Text, Title } from "@mantine/core";
import "./CharacterSheet.css";
import { CharacterDataType } from "../../types/types";

interface CharacterSheetProps {
  data: CharacterDataType;
}

const CharacterSheet = ({
  data: { theme, name, species, gender, age, role, history, appearance },
}: CharacterSheetProps) => {
  return (
    <Box
      id="character-sheet-container"
      style={{ marginTop: 50, fontWeight: "bold" }}
    >
      <Title>CHARACTER SHEET</Title>
      <Text>
        <strong>Theme: </strong> {theme}
      </Text>
      <Text>
        <strong>Name: </strong> {name}
      </Text>
      <Text>
        <strong>Species: </strong> {species}
      </Text>
      <Text>
        <strong>Gender: </strong>
        {gender}
      </Text>
      <Text>
        <strong>Age: </strong> {age}
      </Text>
      <Text>
        <strong>Role: </strong>
        {role}
      </Text>
      <Text>{appearance}</Text>
      <Text>{history}</Text>
    </Box>
  );
};

export default CharacterSheet;
