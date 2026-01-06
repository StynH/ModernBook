import { ShoppingBag } from "lucide-react";

const InventoryBlock = ({ title, items, currency }) => (
  <div className="my-10 break-inside-avoid">
    {title && <h4 className="font-black text-slate-900 mb-4 font-sans text-xl flex items-center gap-3"><ShoppingBag className="w-6 h-6 text-amber-500" /> {title}</h4>}
    <div className="rounded-xl border border-slate-200 shadow-lg overflow-hidden bg-white">
      <table className="w-full text-left border-collapse text-[16px]">
        <thead>
          <tr className="bg-slate-100 text-slate-800 font-black font-sans uppercase tracking-wider text-xs border-b-2 border-slate-200">
            <th className="p-4">Item</th>
            <th className="p-4">Price ({currency || "gp"})</th>
            <th className="p-4">Bulk</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((item, i) => (
            <tr key={i} className="hover:bg-blue-50 transition-colors">
              <td className="p-4 font-medium text-slate-900">{item.name}</td>
              <td className="p-4 font-mono text-slate-600 font-medium">{item.price}</td>
              <td className="p-4 text-slate-600 font-medium">{item.bulk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default InventoryBlock;

