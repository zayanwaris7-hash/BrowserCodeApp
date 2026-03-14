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
        /* Responsive Container:
           - Default: Full width (mobile)
           - md: max width of 28rem
           - lg: max width of 32rem
        */
        <div className="w-full md:max-w-md lg:max-w-lg mx-auto bg-gray-900 p-4 sm:p-6 rounded-xl shadow-2xl transition-all">
            <label 
                htmlFor="dark-input" 
                className="block text-sm font-medium text-gray-400 mb-2 ml-1"
            >
                Write Your Input LineWise or Use \n:
            </label>
            
            <textarea
                id="dark-input"
                value={inp}
                onChange={handleChange}
                /* Responsive Height:
                   - Mobile: 6 rows
                   - md+: 8 rows 
                */
                rows="6"
                className="block w-full px-4 py-3 text-sm md:text-base text-gray-100 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-y"
                placeholder="Enter your input here..."
            ></textarea>

            {/* Optional helper text for mobile users */}
            <p className="mt-2 text-xs text-gray-500 italic px-1">
                Tip: Press Enter for a new line.
            </p>
        </div>
    );
}

export default InputBox;