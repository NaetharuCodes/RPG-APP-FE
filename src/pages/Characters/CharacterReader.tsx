import { Title, Image, Group } from "@mantine/core";
import sampleImage from "../../assets/Cyberpunk Character 0001.webp";
import { characterDataType } from "../../types/types";
import CharacterSheet from "../../components/CharacterSheet/CharacterSheet";

const dummyData: characterDataType = {
  theme: "Cyberpunk",
  name: "Aya - Neon Ghost - Kurosawa",
  species: "Human (Cybernetic)",
  gender: "Female",
  age: "32",
  role: "Street Samurai",
  appearance:
    'Aya "Neon Ghost" Kurosawa is a striking presence, her appearance a harmonious fusion of the traditional and the cybernetic. She stands at a medium height, her physique lean and wiry, honed to perfection from years of rigorous training and street fights. Her skin is a canvas of living art, adorned with tattoos that are a blend of ancient Japanese motifs and futuristic, circuit-like designs that glow faintly under her skin, thanks to embedded bioluminescent nanotech. Her face is sharp and angular, with high cheekbones and piercing, almond-shaped eyes that shimmer with an unnatural, electric blue hue— a side effect of her cybernetic vision enhancements. Aya\'s hair is a sleek, jet-black waterfall, often tied back into a tight bun or ponytail, with stray strands framing her face, adding a touch of wildness to her otherwise calculated demeanor. Her attire is a mix of functional combat wear and traditional Japanese elements; a form-fitting, armored bodysuit is paired with a modernized hakama skirt, allowing for mobility while paying homage to her heritage. On her back, she carries her katana in a scabbard that doubles as a high-tech device, capable of cloaking her presence from electronic surveillance. The overall impression she leaves is that of a ghost from the past, haunting the technological landscape of the future, a bridge between worlds that are often thought to be irreconcilable.',
  history:
    "In the neon-drenched, rain-slicked streets of a future metropolis, there walks a figure both enigmatic and formidable: Aya \"Neon Ghost\" Kurosawa. A former corporate security operative turned rogue, Aya has redefined the archetype of a street samurai, blending ancient samurai virtues with a hacker's ethos. Her cybernetic enhancements are minimalist yet highly specialized, favoring agility and cognitive enhancements over brute strength. A master of both digital and physical stealth, she navigates the urban sprawl as if moving through another dimension, unseen yet always present. Her katana, a family heirloom, is integrated with nano-technology, allowing her to slice through both firewalls and enemy combatants with equal precision. Aya's reputation is built not on the notches of her blade but on the ghosts she leaves in her wake—corporations and gangs alike whisper her name, knowing she can dismantle their power structures with a single, well-placed strike. In a world where technology and tradition collide, Aya stands as a testament to the power of blending the old with the new, becoming a symbol of resistance and a harbinger of change in the cyberpunk age.",
};

const CharacterReader = () => {
  return <CharacterSheet data={dummyData} />;
};

export default CharacterReader;
