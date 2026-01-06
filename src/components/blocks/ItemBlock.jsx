import { Coins, Move, Package, Shield, Skull, Sword, Tag, Zap } from "lucide-react";
import CardHeader from "../core/CardHeader";
import GlassCard from "../core/GlassCard";
import ParsedText from "../core/ParsedText";
import StatPill from "../core/StatPill";

const ItemBlock = ({ data }) => (
  <GlassCard colorTheme="amber">
    <CardHeader name={data.name} type="Item" level={data.level} traits={data.traits} theme="amber" icon={Package} />
    <div className="p-6 text-[15px]">
      {data.general && (
        <div className="flex flex-wrap gap-4 mb-6 text-slate-700 bg-amber-50 p-5 rounded-xl border border-amber-200">
          {data.general.price && (
            <div className="flex flex-col mr-6">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wide flex items-center gap-1.5"><Coins className="w-3 h-3" /> Price</span>
              <span className="font-bold text-slate-900 text-lg">{data.general.price}</span>
            </div>
          )}
          {data.general.bulk && (
            <div className="flex flex-col mr-6">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wide flex items-center gap-1.5"><Package className="w-3 h-3" /> Bulk</span>
              <span className="font-bold text-slate-900 text-lg">{data.general.bulk}</span>
            </div>
          )}
          {data.general.usage && (
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wide flex items-center gap-1.5"><Tag className="w-3 h-3" /> Usage</span>
              <span className="font-bold text-slate-900 text-lg">{data.general.usage}</span>
            </div>
          )}
        </div>
      )}

      {data.weapon && (
        <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Sword className="w-4 h-4 text-slate-400" /> Weapon Statistics
          </div>
          <div className="flex flex-wrap gap-2">
            {data.weapon.damage && <StatPill label="Damage" value={data.weapon.damage} fullWidth />}
            {data.weapon.hands && <StatPill label="Hands" value={data.weapon.hands} />}
            {data.weapon.range && <StatPill label="Range" value={data.weapon.range} />}
            {data.weapon.reload && <StatPill label="Reload" value={data.weapon.reload} />}
            {data.weapon.category && <StatPill label="Category" value={data.weapon.category} />}
            {data.weapon.group && <StatPill label="Group" value={data.weapon.group} />}
          </div>
        </div>
      )}

      {data.armor && (
        <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Shield className="w-4 h-4 text-slate-400" /> Armor Statistics
          </div>
          <div className="flex flex-wrap gap-2">
            {data.armor.ac_bonus && <StatPill label="AC Bonus" value={data.armor.ac_bonus} />}
            {data.armor.dex_cap && <StatPill label="Dex Cap" value={data.armor.dex_cap} />}
            {data.armor.check_penalty && <StatPill label="Check Pen" value={data.armor.check_penalty} />}
            {data.armor.speed_penalty && <StatPill label="Speed Pen" value={data.armor.speed_penalty} />}
            {data.armor.strength && <StatPill label="Strength" value={data.armor.strength} />}
            {data.armor.group && <StatPill label="Group" value={data.armor.group} />}
          </div>
        </div>
      )}

      {data.shield && (
        <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Shield className="w-4 h-4 text-slate-400" /> Shield Statistics
          </div>
          <div className="flex flex-wrap gap-2">
            {data.shield.hardness && <StatPill label="Hardness" value={data.shield.hardness} />}
            {data.shield.hp && <StatPill label="HP" value={data.shield.hp} />}
            {data.shield.bt && <StatPill label="BT" value={data.shield.bt} />}
          </div>
        </div>
      )}

      {data.vehicle && (
        <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Move className="w-4 h-4 text-slate-400" /> Vehicle Statistics
          </div>
          <div className="flex flex-wrap gap-2">
            {data.vehicle.speed && <StatPill label="Speed" value={data.vehicle.speed} fullWidth />}
            {data.vehicle.piloting_check && <StatPill label="Piloting Check" value={data.vehicle.piloting_check} fullWidth />}
            {data.vehicle.collision_damage && <StatPill label="Collision" value={data.vehicle.collision_damage} fullWidth />}

            {data.vehicle.crew && <StatPill label="Crew" value={data.vehicle.crew} />}
            {data.vehicle.passengers && <StatPill label="Passengers" value={data.vehicle.passengers} />}
            {data.vehicle.ac && <StatPill label="AC" value={data.vehicle.ac} />}
            {data.vehicle.hardness && <StatPill label="Hardness" value={data.vehicle.hardness} />}
            {data.vehicle.hp && <StatPill label="HP" value={data.vehicle.hp} />}
            {data.vehicle.bt && <StatPill label="BT" value={data.vehicle.bt} />}
          </div>
        </div>
      )}

      {data.affliction && (
        <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200 text-[15px] space-y-2 shadow-sm">
          <div className="flex flex-wrap gap-4">
            {data.affliction.saving_throw && (
              <div className="flex flex-col">
                <strong className="text-slate-900 uppercase text-xs tracking-wide">Save</strong>
                <span>{data.affliction.saving_throw}</span>
              </div>
            )}
            {data.affliction.onset && (
              <div className="flex flex-col">
                <strong className="text-slate-900 uppercase text-xs tracking-wide">Onset</strong>
                <span>{data.affliction.onset}</span>
              </div>
            )}
            {data.affliction.duration && (
              <div className="flex flex-col">
                <strong className="text-slate-900 uppercase text-xs tracking-wide">Duration</strong>
                <span>{data.affliction.duration}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {data.activation && (
        <div className="mb-6 bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
          <div className="font-bold text-amber-900 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-amber-100 pb-2">
            <Zap className="w-4 h-4" /> Activate
          </div>

          <div className="space-y-1.5 text-[15px] mb-3">
            {data.activation.frequency && <div className="flex items-baseline gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Frequency</strong> <span className="text-slate-800">{data.activation.frequency}</span></div>}
            {data.activation.trigger && <div className="flex items-baseline gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Trigger</strong> <span className="text-slate-800">{data.activation.trigger}</span></div>}
            {data.activation.requirements && <div className="flex items-baseline gap-2"><strong className="text-slate-900 uppercase text-xs tracking-wide w-24 shrink-0">Requirements</strong> <span className="text-slate-800">{data.activation.requirements}</span></div>}
          </div>

          {data.activation.actions && (
            <div className="text-slate-800 text-lg leading-relaxed">
              <ParsedText text={/^(1|2|3|r|f|reaction|free)$/i.test(data.activation.actions) ? `[${data.activation.actions}]` : data.activation.actions} />
            </div>
          )}
        </div>
      )}

      {data.affliction?.stages && (
        <div className="mb-6 space-y-2">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-1 flex items-center gap-2"><Skull className="w-4 h-4 text-slate-400" /> Stages</div>
          {data.affliction.stages.map((stage, i) => (
            <div key={i} className="bg-white p-3 rounded border border-slate-200 shadow-sm flex flex-col md:flex-row gap-2 md:gap-4 text-sm">
              <span className="font-bold text-slate-700 whitespace-nowrap shrink-0">Stage {stage.stage}</span>
              <span className="text-slate-800 font-serif leading-relaxed"><ParsedText text={stage.text} /></span>
            </div>
          ))}
        </div>
      )}

      <div className="px-2 text-slate-800 leading-relaxed font-serif text-lg"><ParsedText text={data.description} /></div>

      {data.craft_requirements && (
        <div className="mt-6 pt-4 border-t border-slate-200 text-sm">
          <strong className="text-slate-900 uppercase text-xs tracking-wide">Craft Requirements</strong> <span className="text-slate-700">{data.craft_requirements}</span>
        </div>
      )}
    </div>
  </GlassCard>
);

export default ItemBlock;

