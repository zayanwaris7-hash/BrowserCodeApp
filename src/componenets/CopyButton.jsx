import React, { useState } from 'react';

function CopyButton({ passref }) {
  const [copied, setCopied] = useState(false);

  const copypass = () => {
    // For Monaco Editor, the text is retrieved via getValue()
    const codeText = passref.current?.getValue();

    if (codeText) {
      window.navigator.clipboard.writeText(codeText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset icon after 2s
      });
    }
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-800/40 border-b border-gray-800 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] font-bold font-mono text-gray-500 uppercase tracking-widest">
          Source Code
        </span>
      </div>

      <button
        onClick={copypass}
        className={`flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase transition-all duration-200 border rounded bg-zinc-900/50 active:scale-90 shadow-sm
          ${copied 
            ? "text-emerald-400 border-emerald-500/50" 
            : "text-gray-400 border-zinc-700 hover:bg-zinc-700 hover:text-cyan-400 hover:border-cyan-500/30"
          }`}
      >
        {copied ? (
          /* Checkmark Icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        ) : (
          /* Copy Icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
        )}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}

export default CopyButton;