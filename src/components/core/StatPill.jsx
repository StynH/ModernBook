const StatPill = ({ label, value, fullWidth = false }) => (
  <div className={`bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex flex-col justify-center ${fullWidth ? "w-full" : "flex-grow min-w-[120px] max-w-full"}`}>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 truncate">{label}</span>
    <span className="font-bold text-slate-900 text-sm leading-tight break-words">{value}</span>
  </div>
);

export default StatPill;

