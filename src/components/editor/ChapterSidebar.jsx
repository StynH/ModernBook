import { Book, ChevronRight } from "lucide-react";

const ChapterSidebar = ({ chapters, activeChapterId, onSelect }) => (
  <div className="w-20 lg:w-72 flex flex-col bg-slate-900/40 backdrop-blur-xl border-r border-white/5 shrink-0 z-20 relative">
    <div className="p-6 border-b border-white/5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
        <Book className="w-6 h-6 text-white" />
      </div>
      <div className="hidden lg:block">
        <h1 className="text-lg font-bold text-white tracking-tight">Architect <span className="text-blue-500">2e</span></h1>
        <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Visual Engine v9.8</div>
      </div>
    </div>

    <nav className="flex-1 overflow-y-auto p-4 space-y-2">
      {chapters.map(chapter => (
        <button
          key={chapter.id}
          onClick={() => onSelect(chapter.id)}
          className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 font-medium group relative overflow-hidden ${
            activeChapterId === chapter.id
              ? "bg-blue-600/90 text-white shadow-lg shadow-blue-900/20"
              : "hover:bg-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <div className="relative z-10 flex items-center justify-between">
            <span className="hidden lg:block truncate">{chapter.title}</span>
            <span className="lg:hidden block">{chapter.id}</span>
            {activeChapterId === chapter.id && <ChevronRight className="w-4 h-4 hidden lg:block" />}
          </div>
        </button>
      ))}
    </nav>
  </div>
);

export default ChapterSidebar;

