const ImageBlock = ({ src, caption, fullWidth }) => (
  <div className={`my-10 ${fullWidth ? "col-span-full" : ""} break-inside-avoid`}>
    <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
      <img src={src} alt={caption} className="w-full h-auto object-cover" />
    </div>
    {caption && <div className="mt-3 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">{caption}</div>}
  </div>
);

export default ImageBlock;

