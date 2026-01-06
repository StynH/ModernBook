import { Layout } from "lucide-react";

const TabHeader = ({ activeTab, onChange }) => (
  <header className="h-16 bg-slate-900/30 backdrop-blur-md border-b border-white/5 flex items-center px-6 justify-between shrink-0">
    <div className="flex bg-black/20 rounded-lg p-1 border border-white/5">
      <button onClick={() => onChange("preview")} className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${activeTab === "preview" ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}>Preview</button>
      <button onClick={() => onChange("json")} className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${activeTab === "json" ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}>Code</button>
    </div>
    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
      <div className="flex items-center gap-2"><Layout className="w-3 h-3" /> <span>1050px Canvas</span></div>
    </div>
  </header>
);

export default TabHeader;

