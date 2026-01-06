import { Activity, AlertTriangle, Eye as EyeIcon, Move, Zap } from "lucide-react";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";
import ParsedText from "../core/ParsedText";

const HazardBlock = ({ data }) => (
  <GlassCard colorTheme="amber">
    <CardHeader name={data.name} type={data.type || "Hazard"} level={data.level} traits={data.traits} theme="amber" icon={AlertTriangle} />
    <div className="p-6">
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-5 mb-6 text-slate-700 space-y-2 text-[15px]">
        <div className="flex items-center gap-3">
          <strong className="text-amber-900 uppercase text-xs tracking-wide w-20 shrink-0 flex items-center gap-2"><EyeIcon className="w-4 h-4" /> Stealth</strong>
          <span className="font-bold text-slate-900">{data.stealth}</span>
        </div>
        {data.disable && (
          <div className="flex items-start gap-3">
            <strong className="text-amber-900 uppercase text-xs tracking-wide w-20 shrink-0 mt-0.5 flex items-center gap-2"><Zap className="w-4 h-4" /> Disable</strong>
            <span className="font-medium text-slate-800 leading-snug"><ParsedText text={data.disable} /></span>
          </div>
        )}
      </div>

      {data.description && (
        <p className="text-lg font-serif italic text-slate-600 mb-6 pl-4 border-l-4 border-amber-300"><ParsedText text={data.description} /></p>
      )}

      <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 text-[15px] font-bold text-slate-900 p-4 border-t border-b border-amber-100">
        <span>AC {data.ac}</span>
        <span>Fort +{data.fort}</span>
        <span>Ref +{data.ref}</span>
        <span>HP {data.hp} {(data.hardness !== undefined && data.hardness !== null) && <span className="text-slate-500 font-medium font-serif">(Hardness {data.hardness})</span>}</span>
      </div>

      {data.routine && (
        <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-amber-900 font-bold font-sans text-sm uppercase tracking-wide">
            <Activity className="w-4 h-4" /> Routine
          </div>
          <p className="text-slate-800 text-lg leading-relaxed font-serif"><ParsedText text={data.routine} /></p>
        </div>
      )}

      {data.reset && (
        <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm mt-4">
          <div className="flex items-center gap-2 mb-3 text-amber-900 font-bold font-sans text-sm uppercase tracking-wide">
            <Move className="w-4 h-4" /> Reset
          </div>
          <p className="text-slate-800 text-lg leading-relaxed font-serif"><ParsedText text={data.reset} /></p>
        </div>
      )}
    </div>
  </GlassCard>
);

export default HazardBlock;

