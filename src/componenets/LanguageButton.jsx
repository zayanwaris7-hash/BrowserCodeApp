import React from 'react'
import { monacoLanguages } from '../Constants/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../createConext/LanguageDataSlice'

function LanguageButton() {
    const dispatch = useDispatch();
    const statee = useSelector((state) => (state.data));
    
    const handle = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        // Grabbing the Judge0 ID attribute
        const selectedId = selectedOption.id;
        
        console.log("The ID is:", selectedId);
        dispatch(changeValue({ judge0Id: selectedId }));
    }

    return (
        /* - w-full: takes full width on small screens
           - sm:w-auto: returns to natural width on larger screens
           - min-w-[140px]: ensures it doesn't get too tiny
        */
        <select 
            defaultValue={statee.id} 
            onChange={handle}
            className="w-full sm:w-auto min-w-[160px] bg-gray-800 text-gray-100 text-sm md:text-base rounded-lg border border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 block p-2 md:p-2.5 cursor-pointer outline-none transition-all hover:bg-gray-700 active:scale-95"
        >
            {monacoLanguages.map((one) => (
               <option key={one.id} id={one.judge0Id} value={one.id} className="bg-gray-800">
                   {one.name} {one.version && `(${one.version})`}
               </option>
            ))}
        </select>
    )
};

export default LanguageButton