import { useMemo, useState } from "react";
import { Printer } from "lucide-react";
import { 
  AfflictionBlock,
  AreaBlock,
  CreatureBlock,
  CheckBlock,
  DeityBlock,
  FeatBlock,
  HazardBlock,
  ImageBlock,
  InventoryBlock,
  ItemBlock,
  ListBlock,
  ReadAloudBox,
  SidebarBlock,
  SpellBlock,
  TableBlock,
  XPBlock
} from "./components/blocks";
import ChapterSidebar from "./components/editor/ChapterSidebar";
import SnippetPanel from "./components/editor/SnippetPanel";
import TabHeader from "./components/editor/TabHeader";
import ParsedText from "./components/core/ParsedText";
import { DEMO_DATA } from "./data/demoData";
import "./styles/app.css";

const renderBlock = (block, idx) => {
  switch (block.type) {
    case "heading":
    return (
        <h2
          key={idx}
          className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 break-after-avoid mt-12 mb-8 text-3xl tracking-tight uppercase border-b-4 border-slate-100 pb-2"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
    return (
        <p key={idx} className="mb-6 text-[17px] leading-8">
          <ParsedText text={block.text} />
        </p>
      );
    case "intro":
    return (
        <div
          key={idx}
          className="mb-12 text-2xl leading-9 font-light text-slate-500 font-sans border-l-4 border-blue-500 pl-8 py-2 italic"
        >
          <ParsedText text={block.text} />
        </div>
    );
    case "creature":
      return <CreatureBlock key={idx} data={block.data} />;
    case "spell":
      return <SpellBlock key={idx} data={block.data} />;
    case "feat":
      return <FeatBlock key={idx} data={block.data} />;
    case "item":
      return <ItemBlock key={idx} data={block.data} />;
    case "deity":
      return <DeityBlock key={idx} data={block.data} />;
    case "inventory":
      return <InventoryBlock key={idx} title={block.title} items={block.items} currency={block.currency} />;
    case "affliction":
      return <AfflictionBlock key={idx} data={block.data} />;
    case "hazard":
      return <HazardBlock key={idx} data={block.data} />;
    case "xp":
      return <XPBlock key={idx} amount={block.amount} text={block.text} />;
    case "area":
      return <AreaBlock key={idx} id={block.id} name={block.name} severity={block.severity} />;
    case "image":
      return <ImageBlock key={idx} src={block.src} caption={block.caption} fullWidth={block.fullWidth} />;
    case "box":
      return <ReadAloudBox key={idx} title={block.title} text={block.text} />;
    case "sidebar":
      return <SidebarBlock key={idx} title={block.title} text={block.text} />;
	case "table":
		return <TableBlock key={idx} headers={block.headers} rows={block.rows} />;
	case "check":
		return <CheckBlock key={idx} skill={block.skill} dc={block.dc} text={block.text} results={block.results} />;
	case "list":
		return <ListBlock key={idx} items={block.items} style={block.style} />;
	default:
		return null;
  }
};

export default function PF2eBookBuilder() {
  const [activeTab, setActiveTab] = useState("preview");
  const [jsonData, setJsonData] = useState(DEMO_DATA);
  const [jsonText, setJsonText] = useState(JSON.stringify(DEMO_DATA, null, 2));
  const [error, setError] = useState(null);
  const [activeChapterId, setActiveChapterId] = useState(DEMO_DATA.chapters[0]?.id);

  const activeChapter = useMemo(
    () => jsonData.chapters.find((c) => c.id === activeChapterId) || jsonData.chapters[0],
    [jsonData, activeChapterId]
  );

  const handleJsonChange = (e) => {
    setJsonText(e.target.value);
    try {
      setJsonData(JSON.parse(e.target.value));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const insertSnippet = (snippet) => {
    try {
        const currentData = JSON.parse(jsonText);
      const chapterIndex = currentData.chapters.findIndex((c) => c.id === activeChapterId);
      const safeIndex = chapterIndex >= 0 ? chapterIndex : 0;

      if (currentData.chapters[safeIndex]) {
        currentData.chapters[safeIndex].content.push(snippet);
            const newText = JSON.stringify(currentData, null, 2);
            setJsonText(newText);
            setJsonData(currentData);
        }
    } catch (e) {
      alert("JSON Error: Fix syntax before inserting.");
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#0a0f1c] text-slate-200 font-sans overflow-hidden selection:bg-blue-500/30">
        <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[150px]"
          style={{ animationDuration: "4s" }}
        />
        </div>

      <ChapterSidebar chapters={jsonData.chapters} activeChapterId={activeChapterId} onSelect={setActiveChapterId} />

        <div className="flex-1 flex flex-col h-full relative z-10">
        <TabHeader activeTab={activeTab} onChange={setActiveTab} />

            <main className="flex-1 overflow-hidden relative">
          {activeTab === "json" ? (
                    <div className="h-full w-full flex">
              <SnippetPanel onInsert={insertSnippet} />
                        <div className="flex-1 relative">
                             <textarea
                                className="w-full h-full bg-[#0b0f19] text-blue-100/70 font-mono text-xs leading-relaxed p-8 outline-none resize-none"
                                value={jsonText}
                                onChange={handleJsonChange}
                                spellCheck="false"
                             />
                {error && (
                  <div className="absolute bottom-4 right-4 bg-red-900/80 text-white text-xs px-3 py-2 rounded shadow-lg border border-red-700">
                    JSON error: {error}
                    </div>
                )}
              </div>
            </div>
          ) : (
                    <div className="h-full w-full overflow-y-auto bg-black/20 p-4 md:p-10 relative scroll-smooth">
              <div
                id="book-content-area"
                className="max-w-[1050px] mx-auto bg-white min-h-[1200px] shadow-2xl relative overflow-hidden rounded-sm ring-1 ring-white/10"
              >
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none"></div>
                            
                            <div className="relative z-10 px-12 py-16 md:px-20 md:py-24 h-full">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

                                {activeChapter && (
                                    <>
                                        <div className="flex items-center gap-4 mb-16">
                                            <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight font-sans leading-none mt-2">
                                                {activeChapter.title}
                                            </h1>
                                        </div>

                                        <div className="md:columns-2 md:gap-16 space-y-8 text-justify leading-relaxed font-serif text-[17px] text-slate-600">
                        {activeChapter.content?.map((block, idx) => renderBlock(block, idx))}
                                        </div>
                                    </>
                                )}
                                
                                <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center pt-4 border-t border-slate-100">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{jsonData.title}</span>
                                    <span className="text-xs font-bold text-slate-900">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>

      <button
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 z-20 bg-slate-800/80 hover:bg-slate-700 text-slate-100 px-4 py-2 rounded-lg border border-white/10 shadow-lg flex items-center gap-2"
      >
        <Printer className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Export PDF</span>
      </button>
    </div>
  );
}

