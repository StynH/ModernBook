import { AlertCircle, CheckCircle, CheckCircle2, Circle, HelpCircle, XCircle } from "lucide-react";
import ParsedText from "../core/ParsedText";

const CheckBlock = ({ skill, dc, text, results }) => {
  return (
    <div className="my-8 font-sans break-inside-avoid">
      <div className="bg-slate-900 text-white p-3 rounded-t-xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 shadow-inner">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Skill Check</span>
            <span className="text-xl font-black tracking-tight leading-none uppercase text-white">{skill}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Difficulty</span>
          <span className="text-2xl font-black text-indigo-400 leading-none">DC {dc}</span>
        </div>
      </div>

      <div className="bg-white border-x border-b border-slate-200 p-6 rounded-b-xl shadow-sm relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
          <HelpCircle className="w-32 h-32 text-slate-900" />
        </div>

        {text && (
          <div className="mb-6 text-slate-700 text-lg leading-relaxed relative z-10">
            <ParsedText text={text} />
          </div>
        )}

        {results && (
          <div className="space-y-3 relative z-10">
            {results.critical_success && (
              <div className="flex gap-4 p-3 rounded-lg bg-green-50 border border-green-200">
                <div className="shrink-0 pt-1"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                <div>
                  <strong className="block text-sm font-bold text-green-800 uppercase tracking-wide mb-0.5">Critical Success</strong>
                  <div className="text-slate-800 text-[15px]"><ParsedText text={results.critical_success} /></div>
                </div>
              </div>
            )}
            
            {results.success && (
              <div className="flex gap-4 p-3 rounded-lg bg-indigo-50 border border-indigo-200">
                <div className="shrink-0 pt-1"><CheckCircle className="w-5 h-5 text-indigo-600" /></div>
                <div>
                  <strong className="block text-sm font-bold text-indigo-800 uppercase tracking-wide mb-0.5">Success</strong>
                  <div className="text-slate-800 text-[15px]"><ParsedText text={results.success} /></div>
                </div>
              </div>
            )}

            {results.failure && (
              <div className="flex gap-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                <div className="shrink-0 pt-1"><AlertCircle className="w-5 h-5 text-amber-600" /></div>
                <div>
                  <strong className="block text-sm font-bold text-amber-800 uppercase tracking-wide mb-0.5">Failure</strong>
                  <div className="text-slate-800 text-[15px]"><ParsedText text={results.failure} /></div>
                </div>
              </div>
            )}

            {results.critical_failure && (
              <div className="flex gap-4 p-3 rounded-lg bg-red-50 border border-red-200">
                <div className="shrink-0 pt-1"><XCircle className="w-5 h-5 text-red-600" /></div>
                <div>
                  <strong className="block text-sm font-bold text-red-800 uppercase tracking-wide mb-0.5">Critical Failure</strong>
                  <div className="text-slate-800 text-[15px]"><ParsedText text={results.critical_failure} /></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckBlock;

