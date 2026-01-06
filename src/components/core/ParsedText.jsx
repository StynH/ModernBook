import ActionIcon from "./ActionIcon";

const ParsedText = ({ text, className = "" }) => {
  if (!text) return null;

  const parts = text.split(/(\[(?:1|2|3|R|F|r|f|reaction|free)\]|\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const actionMatch = part.match(/^\[(1|2|3|R|F|r|f|reaction|free)\]$/);
        if (actionMatch) {
          let type = actionMatch[1].toLowerCase();
          if (type === "reaction") type = "r";
          if (type === "free") type = "f";
          return <ActionIcon key={i} type={type} />;
        }

        const boldMatch = part.match(/^\*\*(.+)\*\*$/);
        if (boldMatch) {
          return <strong key={i} className="font-bold text-slate-900">{boldMatch[1]}</strong>;
        }
        return part;
      })}
    </span>
  );
};

export default ParsedText;

