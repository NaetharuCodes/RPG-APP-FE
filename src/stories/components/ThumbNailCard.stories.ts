import { Meta, StoryObj } from "@storybook/react";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import { Category } from "../../enums/categories";
import "../../main.css";

const meta = {
  title: "Components/ThumbnailCard",
  component: ThumbnailCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ThumbnailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CharacterCard: Story = {
  args: {
    name: "Sample Card",
    category: Category.Character,
  },
};

export const ItemCard: Story = {
  args: {
    name: "Sample Card",
    category: Category.Item,
  },
};

export const LocationCard: Story = {
  args: {
    name: "Sample Card",
    category: Category.Location,
  },
};
