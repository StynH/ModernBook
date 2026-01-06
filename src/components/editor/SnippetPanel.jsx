import { AlertTriangle, Flame, Grid, Hexagon, MessageSquare, Package, Scroll, ShoppingBag, Skull, Star, Sun, Zap } from "lucide-react";
import SnippetButton from "./SnippetButton";

const SnippetPanel = ({ onInsert }) => {
  const handleInsert = (snippet) => () => onInsert(snippet);

  return (
    <div className="w-20 lg:w-24 border-r border-white/5 bg-black/20 flex flex-col items-center py-4 px-2 gap-3 overflow-y-auto custom-scrollbar">
      <SnippetButton icon={Zap} label="Creature" onClick={handleInsert({ type: "creature", data: { name: "New Creature", level: 1, traits: ["Minion"], defense: { hp: 20, ac: 15 }, abilities: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 } } })} />
      <SnippetButton icon={Scroll} label="Feat" onClick={handleInsert({ type: "feat", data: { name: "New Feat", level: 1, traits: ["General"], actions: "1", description: "Do something cool." } })} />
      <SnippetButton icon={Flame} label="Spell" onClick={handleInsert({ type: "spell", data: { name: "Fireball", level: 3, traits: ["Evocation", "Fire"], traditions: ["Arcane"], cast: { actions: "2", components: ["V", "S"] }, description: "Boom." } })} />
      <SnippetButton icon={Package} label="Item" onClick={handleInsert({ type: "item", data: { name: "Magic Sword", level: 4, general: { price: "100 gp" }, description: "Sharp." } })} />
      <SnippetButton icon={Sun} label="Deity" onClick={handleInsert({ type: "deity", data: { name: "Sarenrae", alignment: "NG" } })} />

      <div className="w-10 h-px bg-white/10 my-2"></div>

      <SnippetButton icon={ShoppingBag} label="Shop" onClick={handleInsert({ type: "inventory", title: "Blacksmith", items: [{ name: "Sword", price: "1gp", bulk: "L" }] })} />
      <SnippetButton icon={Skull} label="Curse" onClick={handleInsert({ type: "affliction", data: { name: "Curse of Rust", level: 5, stages: [{ stage: 1, text: "You turn orange." }] } })} />
      <SnippetButton icon={AlertTriangle} label="Hazard" onClick={handleInsert({ type: "hazard", data: { name: "Spiked Pit", level: 2, stealth: "+10", disable: "DC 18 Thievery", description: "A pit with spikes." } })} />

      <div className="w-10 h-px bg-white/10 my-2"></div>

      <SnippetButton icon={MessageSquare} label="Box" onClick={handleInsert({ type: "box", title: "Read Aloud", text: "You see a dark cave..." })} />
      <SnippetButton icon={Grid} label="Table" onClick={handleInsert({ type: "table", headers: ["Roll", "Result"], rows: [["1", "Ouch"], ["20", "Yay"]] })} />
      <SnippetButton icon={Star} label="XP" onClick={handleInsert({ type: "xp", amount: 80, text: "For defeating the guardians." })} />
      <SnippetButton icon={Hexagon} label="Area" onClick={handleInsert({ type: "area", id: "A1", name: "Entrance", severity: "Low" })} />
    </div>
  );
};

export default SnippetPanel;

