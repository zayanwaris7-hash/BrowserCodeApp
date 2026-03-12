import React from 'react';
import { useSelector } from 'react-redux';

function ResultBox() {
  const output = useSelector((state) => state.Apidata.output);
  const isLoading = useSelector((state) => state.Apidata.isLoading);

  return (
    <div className="flex flex-col h-full bg-[#0b0e14] rounded-lg border border-gray-800 shadow-2xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-gray-500 uppercase tracking-widest">Console</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 overflow-y-auto font-mono text-sm min-h-[200px]">
        {isLoading ? (
          <p className="text-blue-400 animate-pulse font-bold">{'>'} Compiling and executing...</p>
        ) : output ? (
          <pre className={`whitespace-pre-wrap ${output.includes("Error") ? "text-red-400" : "text-gray-300"}`}>
            {output}
          </pre>
        ) : (
          <p className="text-gray-600 italic italic tracking-tight">
            // Output will appear here after clicking "Run Program"
          </p>
        )}
      </div>
    </div>
  );
}

export default ResultBox;