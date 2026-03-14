import React from 'react';
import { useSelector } from 'react-redux';
import InputBox from './InputBox';

function ResultBox() {
  const output = useSelector((state) => state.Apidata.output);
  const isLoading = useSelector((state) => state.Apidata.isLoading);

  const getTextColor = (text) => {
    if (!text) return "text-gray-400";
    const lowerText = text.toLowerCase();
    if (lowerText.includes("error") || lowerText.includes("runtime") || lowerText.includes("exited with status")) {
      return "text-red-400";
    }
    return "text-emerald-400";
  };

  return (
    /* Main Container - Matched to InputBox's bg-gray-900 */
    <div className="flex flex-col h-full bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-hidden transition-all">
      
      {/* Integrated Input Area */}
      <div className="border-b border-gray-800/50">
        <InputBox />
      </div>

      {/* Terminal Header / Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/40 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.2)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.2)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.2)]" />
          </div>
          <span className="ml-3 text-[10px] font-bold font-mono text-gray-500 uppercase tracking-widest">
            Console Output
          </span>
        </div>
        
        {!isLoading && output && (
            <span className="hidden sm:inline text-[10px] text-gray-600 font-mono animate-pulse">● LIVE</span>
        )}
      </div>

      {/* Output Content Area - Matched to inner dark theme */}
      <div className="p-4 md:p-6 overflow-y-auto font-mono text-xs md:text-sm flex-grow bg-gray-900/50 custom-scrollbar">
        {isLoading ? (
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <p className="text-blue-400 italic">Processing terminal request...</p>
          </div>
        ) : output ? (
          <pre className={`whitespace-pre-wrap break-words leading-relaxed selection:bg-blue-500/30 ${getTextColor(output)}`}>
            {output}
          </pre>
        ) : (
          <div className="space-y-2 opacity-40">
            <p className="text-gray-500 italic">
              // System idle. 
            </p>
            <p className="text-gray-600 text-[10px] md:text-xs">
              // Enter data above and trigger execution to see results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultBox;