import { Check, Sun, X } from "lucide-react";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";

const DeityBlock = ({ data }) => (
  <GlassCard colorTheme="purple">
    <CardHeader name={data.name} type="Deity" level={data.alignment} theme="purple" icon={Sun} />
    <div className="p-6">
      {data.title && <div className="text-center italic text-slate-500 font-serif text-2xl mb-8 font-medium">"{data.title}"</div>}

      <div className="flex flex-col gap-6 mb-6">
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 w-full">
          <h4 className="font-bold text-purple-900 text-xs uppercase tracking-widest mb-4 border-b border-purple-200 pb-2">Devotion</h4>
          <div className="space-y-3 text-[15px]">
            {data.edicts?.map(e => <div key={e} className="flex gap-3"><Check className="w-5 h-5 text-emerald-600 shrink-0" /> <span className="text-slate-800">{e}</span></div>)}
            {data.anathema?.map(a => <div key={a} className="flex gap-3"><X className="w-5 h-5 text-red-600 shrink-0" /> <span className="text-slate-800">{a}</span></div>)}
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 w-full">
          <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">Benefits</h4>
          <div className="space-y-4 text-[15px]">
            {data.font && <div className="flex justify-between items-center"><span className="text-slate-500 font-bold text-xs uppercase tracking-wide">Font</span> <span className="font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">{data.font.join(" or ")}</span></div>}
            {data.skill && <div className="flex justify-between items-center"><span className="text-slate-500 font-bold text-xs uppercase tracking-wide">Skill</span> <span className="font-bold text-slate-900">{data.skill}</span></div>}
            {data.weapon && <div className="flex justify-between items-center"><span className="text-slate-500 font-bold text-xs uppercase tracking-wide">Weapon</span> <span className="font-bold text-slate-900">{data.weapon}</span></div>}
            {data.domains && (
              <div className="mt-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-wide block mb-2">Domains</span>
                <div className="flex flex-wrap gap-2">{data.domains.map(d => <span key={d} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">{d}</span>)}</div>
              </div>
            )}
            {data.cleric_spells && (
              <div className="mt-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-wide block mb-2">Cleric Spells</span>
                <div className="flex flex-col gap-1.5">{data.cleric_spells.map(s => <div key={s} className="bg-white border border-slate-200 px-3 py-1.5 rounded-md text-sm text-slate-700 shadow-sm font-medium">{s}</div>)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </GlassCard>
);

export default DeityBlock;

