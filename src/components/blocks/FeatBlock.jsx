import { Zap } from "lucide-react";
import ActionIcon from "../core/ActionIcon";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";
import ParsedText from "../core/ParsedText";

const FeatBlock = ({ data }) => {
  const hasStats = data.prerequisites || data.frequency || data.trigger || data.requirements || data.cost;

  return (
    <GlassCard colorTheme="slate">
      <CardHeader name={data.name} type="Feat" level={data.level} traits={data.traits} theme="slate" icon={Zap} />
      <div className="p-6 text-[15px]">
        {hasStats && (
          <div className="flex flex-col gap-2 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            {data.prerequisites && <div className="flex gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Prerequisites</strong> <span className="text-slate-700">{data.prerequisites}</span></div>}
            {data.frequency && <div className="flex gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Frequency</strong> <span className="text-slate-700">{data.frequency}</span></div>}
            {data.trigger && <div className="flex gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Trigger</strong> <span className="text-slate-700">{data.trigger}</span></div>}
            {data.requirements && <div className="flex gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Requirements</strong> <span className="text-slate-700">{data.requirements}</span></div>}
            {data.cost && <div className="flex gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Cost</strong> <span className="text-slate-700">{data.cost}</span></div>}
          </div>
        )}

        <div className="grid grid-cols-[30px_1fr] gap-2 mb-2">
          <div className="flex justify-center pt-1">
            {data.actions && <ActionIcon type={data.actions} />}
          </div>
          <div className="text-slate-800 leading-relaxed font-serif text-lg">
            <ParsedText text={data.description} />
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default FeatBlock;

