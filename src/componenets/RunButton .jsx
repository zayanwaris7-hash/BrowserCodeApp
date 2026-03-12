import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoad ,setOutput} from '../createConext/ApiDataslice';

function RunButton () {
    const dispatch=useDispatch();
    const obj2=useSelector((state)=>(state.data));
    const obj=useSelector((state)=>(state.Apidata))
   const handleRun = async () => {
    if (!obj.value) return;

    dispatch(setIsLoad({isLoading:true}));
    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: obj2.name,
          version: obj.version || "*",
          files: [{ content: obj.value }],
        }),
      });

      const data = await response.json();
      
      // Handle potential errors from the API itself
      const result = data.run.stderr || data.run.stdout || "Code executed with no output.";
      dispatch(setOutput(result));
    } catch (error) {
      dispatch(setOutput("Error: API Connection Failed"));
    } finally {
      dispatch(setIsLoad({isLoading:false}));
    }
}
    
  return (
   <button
      onClick={handleRun}
      disabled={obj.isLoading}
      className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-500 disabled:opacity-50"
    >
      {obj.isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Running...
        </span>
      ) : "Run Program"}
    </button>
  )
}

export default RunButton 