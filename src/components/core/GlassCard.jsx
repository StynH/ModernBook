const themeStyles = {
  slate: "border-slate-300 bg-white/95 shadow-xl shadow-slate-300/40",
  red: "border-red-300/80 bg-white/95 shadow-xl shadow-red-900/10",
  blue: "border-blue-300/80 bg-white/95 shadow-xl shadow-blue-900/10",
  amber: "border-amber-300/80 bg-white/95 shadow-xl shadow-amber-900/10",
  green: "border-emerald-300/80 bg-white/95 shadow-xl shadow-emerald-900/10",
  purple: "border-purple-300/80 bg-white/95 shadow-xl shadow-purple-900/10"
};

const GlassCard = ({ children, className = "", colorTheme = "slate" }) => {
  return (
    <div className={`rounded-xl border-2 ${themeStyles[colorTheme]} overflow-hidden break-inside-avoid relative mb-10 ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;

