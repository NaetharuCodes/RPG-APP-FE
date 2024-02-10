import { MakerOptions } from "../enums/categories";

export type CharacterDataType = {
  theme: string;
  name: string;
  species: string;
  gender: string;
  age: string;
  role: string;
  appearance: string;
  history: string;
};

export type LocationDataType = {
  theme: string;
  name: string;
  appearance: string;
  history: string;
};

export type ItemDataType = {
  theme: string;
  name: string;
  appearance: string;
  history: string;
};

export type LinkType = {
  href: string;
  text: string;
};

export type MakerType = {
  selection: MakerOptions;
};
