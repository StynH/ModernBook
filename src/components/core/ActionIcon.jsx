const ActionIcon = ({ type }) => {
  const typeStr = String(type).toLowerCase();
  const iconBaseClass = "inline-flex items-center justify-center align-middle relative transform -translate-y-[1px]";
  const symbolStyle = { fill: "#1f2937", stroke: "none" };
  const reactionStroke = { fill: "none", stroke: "#1f2937", strokeWidth: "8" };
  const h = "1.2em";

  if (typeStr === "1" || typeStr === "one") {
    return (
      <span className={iconBaseClass} style={{ width: "1.2em", height: h }} title="Single Action">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" style={symbolStyle} />
        </svg>
      </span>
    );
  }
  if (typeStr === "2" || typeStr === "two") {
    return (
      <span className={iconBaseClass} style={{ width: "1.98em", height: h }} title="Two Actions">
        <svg viewBox="0 0 165 100" className="w-full h-full drop-shadow-sm">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" style={symbolStyle} />
          <path d="M115 0 L165 50 L115 100 L65 50 Z" style={symbolStyle} />
        </svg>
      </span>
    );
  }
  if (typeStr === "3" || typeStr === "three") {
    return (
      <span className={iconBaseClass} style={{ width: "2.76em", height: h }} title="Three Actions">
        <svg viewBox="0 0 230 100" className="w-full h-full drop-shadow-sm">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" style={symbolStyle} />
          <path d="M115 0 L165 50 L115 100 L65 50 Z" style={symbolStyle} />
          <path d="M180 0 L230 50 L180 100 L130 50 Z" style={symbolStyle} />
        </svg>
      </span>
    );
  }
  if (typeStr === "r" || typeStr === "reaction") {
    return (
      <span className={iconBaseClass} style={{ width: "1.2em", height: h }} title="Reaction">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path d="M65 20 A 30 30 0 1 0 90 50" style={reactionStroke} strokeLinecap="round" />
          <path d="M65 0 L65 40 L95 20 Z" style={symbolStyle} />
        </svg>
      </span>
    );
  }
  if (typeStr === "f" || typeStr === "free") {
    return (
      <span className={iconBaseClass} style={{ width: "1.2em", height: h }} title="Free Action">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="#1f2937" strokeWidth="8" />
        </svg>
      </span>
    );
  }
  return null;
};

export default ActionIcon;

