import { Box, Title, Text } from "@mantine/core";
import { itemDataType } from "../../types/types";

interface ItemSheetProps {
  data: itemDataType;
}

const ItemSheet = ({
  data: { theme, name, appearance, history },
}: ItemSheetProps) => {
  return (
    <Box>
      <Title>ITEM SHEET</Title>
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

export default ItemSheet;
