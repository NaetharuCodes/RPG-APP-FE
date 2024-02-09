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

export const Card: Story = {
  args: {
    name: "Sample Card",
    category: Category.Character,
  },
};
