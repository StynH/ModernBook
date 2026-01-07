import ParsedText from "../core/ParsedText";

const ListBlock = ({ items, style = "unordered" }) => {
  if (!items || items.length === 0) return null;

  const ListTag = style === "ordered" ? "ol" : "ul";
  const listStyles = style === "ordered" 
    ? "list-decimal marker:text-slate-400 marker:font-bold" 
    : "list-disc marker:text-slate-400";

  return (
    <div className="my-6 pl-4 font-serif">
      <ListTag className={`${listStyles} pl-6 space-y-2 text-slate-800 text-lg leading-relaxed`}>
        {items.map((item, idx) => (
          <li key={idx} className="pl-2">
            <ParsedText text={item} />
          </li>
        ))}
      </ListTag>
    </div>
  );
};

export default ListBlock;

