import React from 'react';
import { useSelector } from 'react-redux';

function ResultBox() {
  const output = useSelector((state) => state.Apidata.output);
  const isLoading = useSelector((state) => state.Apidata.isLoading);

  const getTextColor = (text) => {
    if (!text) return "text-gray-300";
    const lowerText = text.toLowerCase();
    if (lowerText.includes("error") || lowerText.includes("runtime") || lowerText.includes("exited with status")) {
      return "text-red-400";
    }
    return "text-emerald-400";
  };

  return (
    /* h-full ensures it fills the 400px container defined in Backyard */
    <div className="flex flex-col h-full bg-[#0b0e14] rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
      
      {/* Top Bar - Responsive padding */}
      <div className="flex items-center justify-between px-3 md:px-4 py-3 bg-gray-900/80 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.3)]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
          </div>
          <span className="ml-2 md:ml-3 text-[9px] md:text-[10px] font-bold font-mono text-gray-500 uppercase tracking-[0.1em] md:tracking-[0.2em]">
            System Output
          </span>
        </div>
        
        {!isLoading && output && (
            <span className="hidden sm:inline text-[10px] text-gray-600 font-mono">FINISH_READY</span>
        )}
      </div>

      {/* Content Area - Responsive text size and padding */}
      <div className="p-3 md:p-5 overflow-y-auto font-mono text-xs md:text-sm flex-grow custom-scrollbar">
        {isLoading ? (
          <div className="flex items-center gap-3">
            <span className="text-blue-400 animate-bounce text-xs">●</span>
            <p className="text-blue-400/80 italic text-xs md:text-sm">Executing code...</p>
          </div>
        ) : output ? (
          /* break-words is CRITICAL for mobile responsiveness to prevent overflow */
          <pre className={`whitespace-pre-wrap break-words leading-relaxed ${getTextColor(output)}`}>
            <span className="text-gray-600 mr-2 select-none">$</span>
            {output}
          </pre>
        ) : (
          <div className="space-y-1">
            <p className="text-gray-700 italic opacity-60 text-xs md:text-sm">
              // Awaiting execution...
            </p>
            <p className="text-gray-800 text-[10px] md:text-xs">
              // Click "Run Program" to view results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultBox;