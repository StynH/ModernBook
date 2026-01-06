import { Activity, Book, Brain, Diamond, Eye as EyeIcon, Ghost, Heart, MessageSquare, Move, Package, Shield, Swords } from "lucide-react";
import ActionIcon from "../core/ActionIcon";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";
import ParsedText from "../core/ParsedText";

const CreatureBlock = ({ data }) => {
  return (
    <GlassCard colorTheme="red">
      <CardHeader
        name={data.name}
        type="Creature"
        level={data.level}
        traits={data.traits}
        rarity={data.rarity}
        alignment={data.alignment}
        size={data.size}
        theme="red"
        icon={Ghost}
      />

      <div className="p-6 space-y-6">
        <div className="bg-red-50 rounded-xl border border-red-200 p-5 relative">
          <div className="absolute top-0 right-0 p-2 opacity-10"><Brain className="w-16 h-16 text-red-900" /></div>

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-baseline gap-3 text-lg">
              <span className="font-bold text-red-900 uppercase tracking-wide text-sm w-28 shrink-0 flex items-center gap-2">
                <EyeIcon className="w-4 h-4 text-red-700/70 shrink-0" /> Perception
              </span>
              <span className="font-black text-slate-900">+{data.perception}</span>
              {data.senses && <span className="text-slate-600 italic font-serif">({data.senses})</span>}
            </div>

            {data.languages && data.languages.length > 0 && (
              <div className="flex items-baseline gap-3 text-[15px]">
                <span className="font-bold text-red-900 uppercase tracking-wide text-sm w-28 shrink-0 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-red-700/70 shrink-0" /> Languages
                </span>
                <span className="text-slate-800 font-medium">{data.languages.join(", ")}</span>
              </div>
            )}

            {data.skills && Object.keys(data.skills).length > 0 && (
              <div className="flex items-baseline gap-3 text-[15px]">
                <span className="font-bold text-red-900 uppercase tracking-wide text-sm w-28 shrink-0 flex items-center gap-2">
                  <Book className="w-4 h-4 text-red-700/70 shrink-0" /> Skills
                </span>
                <span className="text-slate-800 font-medium leading-relaxed">
                  {Object.entries(data.skills).map(([k, v]) => `${k} +${v}`).join(", ")}
                </span>
              </div>
            )}

            {data.items && data.items.length > 0 && (
              <div className="flex items-baseline gap-3 text-[15px]">
                <span className="font-bold text-red-900 uppercase tracking-wide text-sm w-28 shrink-0 flex items-center gap-2">
                  <Package className="w-4 h-4 text-red-700/70 shrink-0" /> Items
                </span>
                <span className="text-slate-800 font-medium">{data.items.join(", ")}</span>
              </div>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-red-200">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {Object.entries(data.abilities || {}).map(([k, v]) => (
                <div key={k} className="bg-white rounded-lg border border-red-100 p-2 flex flex-col items-center shadow-sm">
                  <span className="text-[10px] font-bold text-red-800 uppercase tracking-widest mb-1">{k}</span>
                  <span className="text-xl font-black text-slate-900 leading-none">{v > 0 ? `+${v}` : v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-red-100 rounded-xl border border-red-300 p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/30 to-transparent pointer-events-none"></div>

          <h4 className="flex items-center gap-2 text-red-900 font-bold uppercase tracking-widest text-sm border-b border-red-300 pb-3 mb-4">
            <Shield className="w-4 h-4" /> Defense
          </h4>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-6">
            <div className="flex items-center gap-6 bg-white/60 p-3 rounded-lg border border-red-200 shadow-sm">
              <div className="flex flex-col items-center px-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase">AC</span>
                <span className="text-3xl font-black text-slate-900 leading-none">{data.defense.ac}</span>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="flex gap-4">
                {["Fort", "Ref", "Will"].map(save => (
                  <div key={save} className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{save}</span>
                    <span className="text-xl font-bold text-slate-900">+{data.defense[save.toLowerCase()]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-600 fill-current" />
              <div className="flex items-center">
                <span className="font-bold text-slate-900 text-2xl leading-none relative -top-[1px]">HP {data.defense.hp}</span>
                {data.defense.hardness && (
                  <span className="ml-3 inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase rounded-md tracking-wider shadow-sm leading-none border border-white/10 bg-slate-700/90 text-white shadow-slate-500/30">
                    <Diamond className="w-3 h-3 mr-1.5" />
                    Hardness {data.defense.hardness}
                  </span>
                )}
                {data.defense.regeneration && (
                  <span className="ml-3 inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase rounded-md tracking-wider shadow-sm leading-none border border-white/10 bg-red-700/90 text-white shadow-red-500/30">
                    <Activity className="w-3 h-3 mr-1.5" />
                    Regeneration {data.defense.regeneration}
                  </span>
                )}
              </div>
            </div>
          </div>

          {(data.defense.immunities?.length > 0 || data.defense.weaknesses?.length > 0 || data.defense.resistances?.length > 0) && (
            <div className="space-y-2 border-t border-red-200 pt-4">
              {data.defense.immunities?.length > 0 && (
                <div className="text-slate-800 text-[15px] leading-relaxed">
                  <strong className="text-red-900 font-sans text-sm uppercase tracking-wide mr-2">Immunities</strong>
                  {data.defense.immunities.join(", ")}
                </div>
              )}
              {data.defense.weaknesses?.length > 0 && (
                <div className="text-slate-800 text-[15px] leading-relaxed">
                  <strong className="text-red-900 font-sans text-sm uppercase tracking-wide mr-2">Weaknesses</strong>
                  {data.defense.weaknesses.map(w => `${w.type} ${w.value}`).join(", ")}
                </div>
              )}
              {data.defense.resistances?.length > 0 && (
                <div className="text-slate-800 text-[15px] leading-relaxed">
                  <strong className="text-red-900 font-sans text-sm uppercase tracking-wide mr-2">Resistances</strong>
                  {data.defense.resistances.map(r => `${r.type} ${r.value}`).join(", ")}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
          <h4 className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-sm border-b border-slate-200 pb-3 mb-4">
            <Swords className="w-4 h-4" /> Offense
          </h4>

          <div className="mb-6 flex items-center gap-3 text-[16px]">
            <Move className="w-5 h-5 text-slate-400" />
            <span className="font-bold text-slate-900">Speed</span>
            <span className="text-slate-700 font-medium">{data.speed}</span>
          </div>

          <div className="space-y-5">
            {data.strikes?.map((strike, idx) => (
              <div key={idx} className="grid grid-cols-[30px_1fr] gap-2">
                <div className="flex justify-center pt-1">
                  <ActionIcon type={strike.actions} />
                </div>
                <div>
                  <div className="text-[16px] leading-snug mb-1">
                    <span className="font-bold text-slate-900 font-sans tracking-tight">{strike.name} +{strike.bonus}</span>
                    {strike.traits && strike.traits.length > 0 && (
                      <span className="text-slate-500 text-sm ml-2 font-medium">({strike.traits.join(", ")})</span>
                    )}
                  </div>
                  <div className="text-slate-700 text-[15px] font-serif">
                    <strong className="text-slate-900 font-sans text-xs uppercase tracking-wide mr-1">Damage</strong> <ParsedText text={strike.damage} />
                  </div>
                </div>
              </div>
            ))}

            {data.spellcasting?.map((entry, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-200 shadow-sm mt-4">
                <div className="font-bold text-blue-900 mb-2 flex items-center gap-3 text-[16px]">
                  {entry.name}
                  {entry.dc && <span className="text-xs bg-blue-100 px-2 py-0.5 rounded text-blue-800 border border-blue-200">DC {entry.dc}</span>}
                  {entry.attack && <span className="text-xs bg-blue-100 px-2 py-0.5 rounded text-blue-800 border border-blue-200">+{entry.attack}</span>}
                </div>
                <div className="space-y-1">
                  {Object.entries(entry.slots).map(([lvl, spells], i) => (
                    <div key={i} className="grid grid-cols-[60px_1fr] gap-2 text-[15px] border-b border-blue-100 last:border-0 py-1">
                      <span className="font-bold text-slate-900 text-right pr-2">{lvl}</span>
                      <span className="text-slate-700 leading-snug font-serif">{spells.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {data.specials?.length > 0 && (
          <div className="space-y-4 pt-2">
            {data.specials.map((special, idx) => (
              <div key={idx} className="bg-amber-50 rounded-xl p-4 border border-amber-200 shadow-sm">
                <div className="grid grid-cols-[30px_1fr] gap-2 mb-2">
                  <div className="flex justify-center pt-1">
                    {special.actions ? <ActionIcon type={special.actions} /> : <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-lg font-sans leading-none">{special.name}</span>
                      {special.traits && special.traits.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase px-1.5 py-0.5 bg-white text-amber-800 rounded border border-amber-200">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pl-[38px] text-slate-800 text-[15px] leading-relaxed font-serif">
                  <ParsedText text={special.text} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default CreatureBlock;

