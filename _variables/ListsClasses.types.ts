type CharacterClass = {
  regExpSearch: object;
  name: string;
  source: [string, number][];
  primaryAbility: string;
  prereqs: string;
  improvements: number[];
  die: number;
  saves: string[];
  skillstxt: Skillstxt;
  armorProfs: [boolean, boolean, string[]];
  weaponProfs: [boolean, boolean, string[]];
  equipment: string;
  subclasses: (string[] | string)[];
  attacks: number[];
  features: Record<string, any>;
};

type Skillstxt = {
  primary: string;
  secondary: string;
};
