const XPBlock = ({ amount, text }) => (
  <div className="flex items-center gap-4 my-8 p-4 rounded-xl bg-slate-100 border border-slate-200 shadow-sm break-inside-avoid w-fit">
    <div className="bg-slate-800 text-white font-black px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-md">{amount} XP</div>
    <span className="text-lg text-slate-700 font-medium italic font-serif">{text}</span>
  </div>
);

export default XPBlock;

