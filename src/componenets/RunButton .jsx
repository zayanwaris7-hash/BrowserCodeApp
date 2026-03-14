import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoad, setOutput } from '../createConext/ApiDataslice';

function RunButton() {
    const dispatch = useDispatch();
    const obj2 = useSelector((state) => (state.data)); 
    const obj = useSelector((state) => (state.Apidata));
    const inpObj=useSelector((state)=>(state.input));

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    const handleRun = async () => {
        if (!obj.value) return;

        dispatch(setIsLoad({ isLoading: true }));
        dispatch(setOutput(""));

        try {
            // STEP 1: Using the Public Demo Instance (No API Key Required)
            const response = await fetch("https://ce.judge0.com/submissions?base64_encoded=true&fields=*", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    source_code: btoa(obj.value),
                    language_id: obj2.judge0Id,
                    stdin: btoa(inpObj.value), 
                }),
            });

            const submissionData = await response.json();
            const token = submissionData.token;

            if (!token) throw new Error("Server Busy or Failed to get token");

            // STEP 2: Polling
            let resultData = null;
            let finished = false;

            while (!finished) {
                const pollResponse = await fetch(`https://ce.judge0.com/submissions/${token}?base64_encoded=true&fields=*`);
                resultData = await pollResponse.json();
                
                if (resultData.status?.id > 2) {
                    finished = true;
                } else {
                    await delay(1000); 
                }
            }

            // STEP 3: Decode Output
            const decode = (str) => str ? atob(str) : "";
            const finalOutput = 
                decode(resultData.stdout) || 
                decode(resultData.stderr) || 
                decode(resultData.compile_output) || 
                resultData.status?.description;

            dispatch(setOutput(finalOutput));

        } catch (error) {
            dispatch(setOutput("Error: Public API is currently overloaded."));
        } finally {
            dispatch(setIsLoad({ isLoading: false }));
        }
    }

    return (
        /* Responsive CSS Changes:
           - w-full sm:w-auto: Button takes full width on mobile, returns to normal on larger screens.
           - py-2.5 md:py-3: Slightly smaller height on mobile to save space.
           - text-sm md:text-base: Adjust text size for readability.
        */
        <button
            onClick={handleRun}
            disabled={obj.isLoading}
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 font-bold text-white text-sm md:text-base transition-all duration-200 bg-emerald-600 rounded-xl hover:bg-emerald-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/20"
        >
            {obj.isLoading ? (
                <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                </span>
            ) : "Run Program"}
        </button>
    )
}

export default RunButton