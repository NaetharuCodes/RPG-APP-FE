import { Meta, StoryObj } from "@storybook/react";
import "../../main.css";

import Header from "../../components/AppShell/Header";
import { Center } from "@mantine/core";

const meta = {
  title: "Components/Appshell/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    brand: "Sample App",
    links: [
      { href: "/", text: "Home" },
      { href: "/characters", text: "Characters" },
      { href: "/locations", text: "Locations" },
    ],
  },
};
