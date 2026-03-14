import React, { useRef } from "react";
import EditorBox from "./EditoBox";
import LanguageButton from "./LanguageButton";
import RunButton from "./RunButton ";
import ResultBox from "./ResultBox";

const Backyard = () => {
  
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center p-4 md:p-10 relative overflow-hidden">
      
      {/* --- OPTICAL MOTION BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 1. Rotating Conic Light (The "Optical" Sweep) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-[0.03] animate-[spin_20s_linear_infinite]">
          <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,white_180deg,transparent_360deg)]"></div>
        </div>

        {/* 2. Drifting Star/Particle Field */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'drift 10s linear infinite'
          }}
        ></div>

        {/* 3. Moving Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'drift 20s linear infinite'
          }}
        ></div>
      </div>

      {/* --- YOUR ORIGINAL CONTENT --- */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading */}
        <header className="w-full flex justify-center mb-8 md:mb-12 mt-4 md:mt-8 overflow-visible">
          <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent 
                         bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                         animate-text bg-[length:200%_200%]
                         drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]
                         hover:drop-shadow-[0_0_40px_rgba(255,0,255,0.9)]
                         transition-all duration-500 leading-tight text-center">
            Code-ingify
          </h1>
        </header>

        <div className="w-full max-w-5xl">
          {/* Buttons */}
          <label className="text-lg md:text-2xl font-bold uppercase tracking-wider text-gray-400 block mb-2">
            Language
          </label>
          
          <div className="flex flex-wrap gap-4 justify-between mb-6">
            <div className="px-5 py-2 bg-zinc-800/60 backdrop-blur-md text-gray-200 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white transition flex-1 sm:flex-none justify-center flex">
              <LanguageButton/>
            </div>
         
            <div className="px-5 py-2 bg-zinc-800/60 backdrop-blur-md text-gray-200 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white transition flex-1 sm:flex-none justify-center flex">
              <RunButton/>
            </div>
          </div>

          {/* Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="h-[400px] bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-xl p-2 shadow-lg hover:border-zinc-600 transition overflow-hidden">
              <EditorBox />
            </div>

            {/* Box 2 */}
            <div className="h-[400px] bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-xl p-2 shadow-lg hover:border-zinc-600 transition overflow-hidden">
              <ResultBox/>
            </div>
          </div>
        </div>
      </div>

      {/* Required CSS Animations */}
      <style jsx>{`
        @keyframes drift {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }
      `}</style>
    </div>
  );
};

export default Backyard;