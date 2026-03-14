import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInput } from '../createConext/InputSlice';

function InputBox() {
    const [inp, setInp] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInp(newValue);
        dispatch(setInput({ val: newValue }));
    };

    return (
        /* Removed max-w-lg and mx-auto to let it fill the ResultBox container. 
           Added h-full to respect the parent's 300px height. */
        <div className="w-full h-full flex flex-col bg-transparent p-3 sm:p-4 transition-all">
            <label 
                htmlFor="dark-input" 
                className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 ml-1"
            >
                Input Terminal:
            </label>
            
            <textarea
                id="dark-input"
                value={inp}
                onChange={handleChange}
                /* Use flex-grow instead of fixed rows so it fills the available 300px */
                className="flex-grow w-full px-4 py-3 text-sm font-mono text-gray-100 bg-gray-800/50 border border-gray-700 rounded-lg placeholder-gray-600 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 resize-none custom-scrollbar"
                placeholder="Enter your input line-wise..."
            ></textarea>

            <p className="mt-2 text-[9px] text-gray-600 italic px-1 uppercase tracking-tighter">
                Tip: \n or Enter for multi-line
            </p>
        </div>
    );
}

export default InputBox;