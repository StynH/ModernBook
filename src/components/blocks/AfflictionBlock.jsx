import { Skull } from "lucide-react";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";
import ParsedText from "../core/ParsedText";

const AfflictionBlock = ({ data }) => (
  <GlassCard colorTheme="green">
    <CardHeader name={data.name} type={data.type || "Affliction"} level={data.level} traits={data.traits} theme="green" icon={Skull} />
    <div className="p-6">
      <div className="flex flex-wrap gap-4 mb-6 bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-slate-700">
        {data.onset && (
          <div className="flex flex-col">
            <strong className="text-emerald-900 uppercase text-xs tracking-wide">Onset</strong>
            <span>{data.onset}</span>
          </div>
        )}
        {data.save && (
          <div className="flex flex-col">
            <strong className="text-emerald-900 uppercase text-xs tracking-wide">Save</strong>
            <span>{data.save}</span>
          </div>
        )}
        {data.duration && (
          <div className="flex flex-col">
            <strong className="text-emerald-900 uppercase text-xs tracking-wide">Duration</strong>
            <span>{data.duration}</span>
          </div>
        )}
      </div>
      <div className="space-y-4">
        {data.stages?.map((stage, i) => (
          <div key={i} className="bg-white p-4 rounded-lg border border-emerald-100 flex flex-col md:flex-row gap-3 text-[16px] shadow-sm">
            <span className="font-bold text-emerald-800 shrink-0 uppercase text-xs tracking-widest whitespace-nowrap pt-1">Stage {stage.stage}</span>
            <span className="text-slate-800 font-serif leading-relaxed"><ParsedText text={stage.text} /></span>
          </div>
        ))}
      </div>
    </div>
  </GlassCard>
);

export default AfflictionBlock;

