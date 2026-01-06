const SnippetButton = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-slate-800/40 border border-white/5 hover:bg-blue-600/20 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 group w-full text-center"
  >
    <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 group-hover:text-blue-200">{label}</span>
  </button>
);

export default SnippetButton;

