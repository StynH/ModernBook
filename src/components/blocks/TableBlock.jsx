import ParsedText from "../core/ParsedText";

const TableBlock = ({ headers, rows }) => (
  <div className="my-10 rounded-xl border border-slate-200 shadow-lg overflow-hidden bg-white break-inside-avoid">
    <table className="w-full text-left border-collapse text-[16px]">
      <thead>
        <tr className="bg-slate-100 text-slate-800 font-black font-sans uppercase tracking-wider text-xs border-b-2 border-slate-200">
          {headers.map((h, i) => <th key={i} className="p-5">{h}</th>)}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-blue-50 transition-colors">
            {row.map((cell, j) => <td key={j} className="p-5 text-slate-700 font-serif leading-snug font-medium"><ParsedText text={cell} /></td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableBlock;

