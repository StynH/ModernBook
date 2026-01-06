export const DEMO_DATA = {
  title: "Bestiary of the Glass Citadel",
  chapters: [
    {
      id: "c1",
      title: "The Crystal Guardians",
      content: [
        {
          type: "intro",
          text: "Within the refracted halls of the Glass Citadel, light bends in impossible ways. The guardians here are not born of flesh, but of **light and resonance**."
        },
        {
          type: "creature",
          data: {
            name: "Prismatic Sentinel",
            level: 5,
            traits: ["Construct", "Mindless"],
            rarity: "Uncommon",
            size: "Large",
            alignment: "N",
            perception: 12,
            senses: "darkvision, low-light vision",
            languages: [],
            skills: { Athletics: 14, Acrobatics: 10 },
            items: ["Glass Greatsword", "Composite Longbow (20 arrows)"],
            abilities: { str: 4, dex: 2, con: 3, int: -5, wis: 0, cha: -5 },
            defense: {
              ac: 22,
              fort: 15,
              ref: 9,
              will: 9,
              hp: 75,
              immunities: ["bleed", "death effects", "disease", "healing", "mental", "poison", "non-magical attacks"],
              weaknesses: [
                { type: "Sonic", value: 5 },
                { type: "Bludgeoning", value: 5 }
              ]
            },
            speed: "25 feet",
            strikes: [
              { name: "Crystalline Fist", actions: "1", bonus: 15, traits: ["magical", "shove"], damage: "2d8+4 bludgeoning" },
              { name: "Refraction Beam", actions: "1", bonus: 13, traits: ["range 60 ft", "fire"], damage: "2d6 fire" }
            ],
            specials: [
              {
                name: "Shatter Retaliation",
                actions: "reaction",
                traits: ["Sonic"],
                text: "Trigger: The sentinel takes bludgeoning damage. Effect: Shards fly outward. Adjacent creatures take **2d6 slashing damage** (DC 20 Basic Reflex)."
              }
            ]
          }
        },
        { type: "heading", text: "Armory of the Glass Knights" },
        {
          type: "item",
          data: {
            name: "Glass Greatsword",
            level: 6,
            traits: ["Rare", "Magical", "Versatile P"],
            description: "A massive blade forged from compressed light. On a critical hit, the target is dazzled for 1 round.",
            general: {
              price: "200 gp",
              bulk: "2",
              usage: "held in 2 hands"
            },
            weapon: {
              category: "Martial",
              group: "Sword",
              damage: "2d12 slashing",
              hands: "2"
            }
          }
        },
        {
          type: "item",
          data: {
            name: "Assassin's Draft",
            level: 9,
            traits: ["Alchemical", "Consumable", "Poison", "Ingested"],
            description: "This clear, tasteless liquid is favored by spies of the citadel.",
            general: {
              price: "150 gp",
              bulk: "L",
              usage: "held in 1 hand"
            },
            activation: {
              actions: "Interact"
            },
            affliction: {
              onset: "10 minutes",
              saving_throw: "DC 28 Fortitude",
              stages: [
                { stage: 1, text: "2d6 poison damage and drained 1 (1 minute)" },
                { stage: 2, text: "3d6 poison damage and drained 2 (1 minute)" },
                { stage: 3, text: "4d6 poison damage and drained 3 (1 minute)" }
              ]
            }
          }
        },
        {
          type: "item",
          data: {
            name: "Clockwork War-Wagon",
            level: 4,
            traits: ["Vehicle", "Large"],
            description: "A reinforced carriage driven by internal gears. It provides standard cover to all passengers.",
            general: {
              price: "800 gp",
              bulk: "-"
            },
            vehicle: {
              speed: "30 feet (clockwork)",
              crew: "1 pilot",
              passengers: "4",
              piloting_check: "Driving Lore (DC 19) or Crafting (DC 21)",
              ac: "16",
              hardness: "10",
              hp: "60",
              bt: "30",
              collision_damage: "3d8 (DC 20)"
            }
          }
        }
      ]
    }
  ]
};

