import TraitBadge from "./TraitBadge";

const bgStyles = {
  slate: "bg-slate-900 text-white",
  red: "bg-red-900 text-white",
  blue: "bg-blue-900 text-white",
  amber: "bg-amber-700 text-white",
  green: "bg-emerald-800 text-white",
  purple: "bg-indigo-900 text-white"
};

const CardHeader = ({ name, type, level, traits, rarity, alignment, size, theme = "slate", icon: Icon }) => {
  return (
    <div className={`${bgStyles[theme]} p-6 relative overflow-hidden shadow-md`}>
      {Icon && <Icon className="absolute -right-6 -top-6 w-40 h-40 opacity-10 rotate-12 pointer-events-none" />}

      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col w-full text-left">
          <div className="flex items-center gap-3 mb-2 opacity-90">
            {Icon && <Icon className="w-5 h-5" />}
            <span className="text-xs font-bold uppercase tracking-[0.2em]">{type} {level}</span>
          </div>
          <h3 className="text-4xl font-black font-sans tracking-tight leading-none mb-4">{name}</h3>

          <div className="flex flex-wrap items-center">
            {rarity && rarity.toLowerCase() !== "common" && <TraitBadge label={rarity} theme={theme} />}
            {alignment && <TraitBadge label={alignment} theme={theme} />}
            {size && <TraitBadge label={size} theme={theme} />}
            {traits?.map((t, i) => <TraitBadge key={i} label={t} theme={theme} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;

