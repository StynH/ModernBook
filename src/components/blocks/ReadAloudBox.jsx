import { MessageSquare } from "lucide-react";
import ParsedText from "../core/ParsedText";

const ReadAloudBox = ({ title, text }) => (
  <div className="relative my-10 break-inside-avoid px-2">
    <div className="bg-emerald-50 p-6 rounded-r-2xl border-l-8 border-emerald-500 shadow-md">
      <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-2">
        <MessageSquare className="w-4 h-4" /> {title || "Read Aloud"}
      </h5>
      <p className="italic text-slate-800 text-lg leading-relaxed font-serif"><ParsedText text={text} /></p>
    </div>
  </div>
);

export default ReadAloudBox;

