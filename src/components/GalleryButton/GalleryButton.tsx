import { Button } from "@mantine/core";

interface GalleryButtonProps {
  onClick: () => void;
  text: string;
  status: boolean;
}

const GalleryButton = ({ onClick, text, status }: GalleryButtonProps) => {
  return (
    <Button onClick={onClick} color={status ? "cyan" : "yellow"}>
      {text}
    </Button>
  );
};

export default GalleryButton;
