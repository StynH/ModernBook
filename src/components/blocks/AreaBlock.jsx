const AreaBlock = ({ id, name, severity }) => {
  let color = "text-slate-400 border-slate-200";
  if (severity === "Low") color = "text-green-600 border-green-200";
  if (severity === "Moderate") color = "text-amber-600 border-amber-200";
  if (severity === "Severe") color = "text-red-600 border-red-200";
  if (severity === "Extreme") color = "text-purple-600 border-purple-200";

  return (
    <div className="flex items-baseline gap-4 mt-12 mb-8 border-b-2 border-slate-100 pb-2 break-after-avoid">
      <h2 className={`text-3xl font-bold font-sans tracking-tight ${color === "text-slate-400 border-slate-200" ? "text-slate-900" : color.split(' ')[0]}`}>{name}</h2>
      {severity && (
        <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ml-auto shadow-sm ${color.replace("text-", "text-").replace("border-", "bg-").replace("600", "50").replace("200", "100")} ${color.split(" ")[1]}`}>
          {severity}
        </span>
      )}
    </div>
  );
};

export default AreaBlock;

