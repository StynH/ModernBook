import { Zap } from "lucide-react";
import ParsedText from "../core/ParsedText";

const SidebarBlock = ({ title, text }) => (
  <div className="my-10 relative group break-inside-avoid px-2">
    <div className="absolute inset-0 bg-blue-100 rounded-2xl skew-y-1 transform transition-transform group-hover:skew-y-2 shadow-sm"></div>
    <div className="relative bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
      <h4 className="font-black text-blue-900 text-xl mb-4 font-sans flex items-center gap-3 uppercase tracking-tight">
        <div className="bg-blue-100 p-2 rounded-lg"><Zap className="w-6 h-6 text-blue-600 fill-current" /></div>
        {title}
      </h4>
      <p className="text-lg leading-relaxed text-slate-800 font-serif"><ParsedText text={text} /></p>
    </div>
  </div>
);

export default SidebarBlock;

