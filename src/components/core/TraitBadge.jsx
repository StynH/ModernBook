const TraitBadge = ({ label, theme = "slate" }) => {
  const lowerLabel = label.toLowerCase();

  let bgClass = "bg-slate-700/90 text-white shadow-slate-500/30";
  if (lowerLabel === "uncommon") bgClass = "bg-amber-600/90 text-white shadow-amber-500/30";
  if (lowerLabel === "rare") bgClass = "bg-blue-700/90 text-white shadow-blue-500/30";
  if (lowerLabel === "unique") bgClass = "bg-purple-700/90 text-white shadow-purple-500/30";
  if (["lg", "ng", "cg", "ln", "n", "cn", "le", "ne", "ce"].includes(lowerLabel)) {
    bgClass = "bg-emerald-700/90 text-white shadow-emerald-500/30";
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase rounded-md mr-2 mb-2 tracking-wider shadow-sm leading-none border border-white/10 ${bgClass}`}>
      {label}
    </span>
  );
};

export default TraitBadge;

