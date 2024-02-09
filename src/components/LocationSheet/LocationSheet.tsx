import { Box, Text, Title } from "@mantine/core";
import { locationDataType } from "../../types/types";

interface LocationSheetProps {
  data: locationDataType;
}

const LocationSheet = ({
  data: { theme, name, appearance, history },
}: LocationSheetProps) => {
  return (
    <Box>
      <Title>LOCATION SHEET</Title>
      <Text>
        <strong>Theme: </strong>
        {theme}
      </Text>
      <Text>
        <strong>Name: </strong>
        {name}
      </Text>
      <Text>
        <strong>Appearance: </strong>
        {appearance}
      </Text>
      <Text>
        <strong>History: </strong>
        {history}
      </Text>
    </Box>
  );
};

export default LocationSheet;
