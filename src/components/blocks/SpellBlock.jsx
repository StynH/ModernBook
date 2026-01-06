import { Activity, Book, Check, Coins, Flame, Grid, Move, Shield, Sun, Target, Users, Zap } from "lucide-react";
import ActionIcon from "../core/ActionIcon";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";
import ParsedText from "../core/ParsedText";

const SpellBlock = ({ data }) => {
  const isRitual = data.type === "Ritual";

  return (
    <GlassCard colorTheme="blue">
      <CardHeader name={data.name} type={data.type || "Spell"} level={data.level} traits={data.traits} theme="blue" icon={data.type === "Ritual" ? Sun : Flame} />
      <div className="p-6 text-[15px] relative">
        <div className={`grid grid-cols-1 ${isRitual ? "gap-y-4" : "md:grid-cols-2 gap-4"} mb-6 text-slate-700 bg-blue-50 p-5 rounded-xl border border-blue-200`}>
          <div className="space-y-2">
            {data.traditions && (
              <div className="flex items-start gap-2">
                <strong className="text-blue-900 uppercase text-xs tracking-wide block mt-0.5 flex items-center gap-1.5">
                  <Book className="w-3 h-3" /> Traditions
                </strong>
                <span>{data.traditions?.join(", ")}</span>
              </div>
            )}
            {data.cast && (
              <div className="flex items-start gap-2">
                <strong className="text-blue-900 uppercase text-xs tracking-wide block mt-0.5 flex items-center gap-1.5">
                  <Zap className="w-3 h-3" /> Cast
                </strong>
                <div className="flex items-center gap-1">
                  {data.cast?.actions && <ActionIcon type={data.cast.actions} />}
                  <span>{data.cast?.components?.join(", ")}</span>
                </div>
              </div>
            )}
            {data.cost && (
              <div className="flex items-start gap-2">
                <strong className="text-blue-900 uppercase text-xs tracking-wide block mt-0.5 flex items-center gap-1.5">
                  <Coins className="w-3 h-3" /> Cost
                </strong>
                <span>{data.cost}</span>
              </div>
            )}
            {data.primary_check && (
              <div className="flex items-start gap-2">
                <strong className="text-blue-900 uppercase text-xs tracking-wide block mt-0.5 flex items-center gap-1.5">
                  <Check className="w-3 h-3" /> Primary
                </strong>
                <span>{data.primary_check}</span>
              </div>
            )}
            {data.secondary_check && (
              <div className="flex items-start gap-2">
                <strong className="text-blue-900 uppercase text-xs tracking-wide block mt-0.5 flex items-center gap-1.5">
                  <Check className="w-3 h-3" /> Secondary
                </strong>
                <span>{data.secondary_check}</span>
              </div>
            )}
            {data.secondary_casters && (
              <div className="flex items-start gap-2">
                <strong className="text-blue-900 uppercase text-xs tracking-wide block mt-0.5 flex items-center gap-1.5">
                  <Users className="w-3 h-3" /> Casters
                </strong>
                <span>{data.secondary_casters}</span>
              </div>
            )}
          </div>

          <div className={`space-y-2 ${isRitual ? "border-t border-blue-200 pt-2" : "border-t md:border-t-0 md:border-l border-blue-200 pt-2 md:pt-0 md:pl-4"}`}>
            {data.range && <div className="flex items-start gap-2"><strong className="text-blue-900 capitalize text-xs tracking-wide uppercase flex items-center gap-1.5"><Target className="w-3 h-3" /> Range</strong> {data.range}</div>}
            {data.area && <div className="flex items-start gap-2"><strong className="text-blue-900 capitalize text-xs tracking-wide uppercase flex items-center gap-1.5"><Grid className="w-3 h-3" /> Area</strong> {data.area}</div>}
            {data.target && <div className="flex items-start gap-2"><strong className="text-blue-900 capitalize text-xs tracking-wide uppercase flex items-center gap-1.5"><Target className="w-3 h-3" /> Target</strong> {data.target}</div>}
            {data.duration && <div className="flex items-start gap-2"><strong className="text-blue-900 capitalize text-xs tracking-wide uppercase flex items-center gap-1.5"><Activity className="w-3 h-3" /> Duration</strong> {data.duration}</div>}
            {data.save && <div className="flex items-start gap-2"><strong className="text-blue-900 capitalize text-xs tracking-wide uppercase flex items-center gap-1.5"><Shield className="w-3 h-3" /> Save</strong> {data.save}</div>}
          </div>
        </div>

        <div className="px-2 prose prose-slate text-slate-800 font-serif leading-relaxed text-lg">
          <p><ParsedText text={data.description} /></p>
        </div>

        {data.heightened && (
          <div className="mt-6">
            <strong className="text-blue-900 block mb-3 font-sans text-sm uppercase tracking-wide border-b border-blue-200 pb-1">Heightened</strong>
            <div className="space-y-2">
              {data.heightened.map((h, i) => (
                <div key={i} className="bg-white p-3 rounded border border-blue-100 shadow-sm text-slate-700">
                  <strong className="text-slate-900 font-sans mr-2">{h.trigger}</strong> <ParsedText text={h.text} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default SpellBlock;

