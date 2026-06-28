import { useState, useEffect, useRef } from "react";

function AlertMessenger() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(undefined);

  useEffect(() => {
    if (prevCountRef.current !== undefined && prevCountRef.current !== count) {
      alert("Son o'zgardi!");
    }
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="min-h-full flex items-center justify-center bg-[#1B1730] p-8">
      <div className="w-full max-w-sm rounded-3xl bg-[#241F40] border border-[#44240a] shadow-2xl p-10 flex flex-col items-center gap-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#9D8FE0]">
          Hisoblagich
        </span>

        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-[#F2A654]/30 rounded-full" />
          <h2 className="relative text-7xl font-black text-[#F2A654] tabular-nums">
            {count}
          </h2>
        </div>

        <div className="flex gap-3 w-full">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="flex-1 py-3 rounded-xl bg-[#FF6F6F]/15 text-[#FF6F6F] font-semibold text-lg hover:bg-[#FF6F6F]/25 active:scale-95 transition"
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            className="flex-1 py-3 rounded-xl bg-[#3A3260] text-[#9D8FE0] font-semibold text-sm hover:bg-[#48406E] active:scale-95 transition"
          >
            Reset
          </button>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="flex-1 py-3 rounded-xl bg-[#F2A654]/15 text-[#F2A654] font-semibold text-lg hover:bg-[#F2A654]/25 active:scale-95 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertMessenger;