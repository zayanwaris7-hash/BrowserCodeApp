import React from 'react'
import { monacoLanguages } from '../Constants/Constants'
import { useDispatch, useSelector } from 'react-redux'
import {changeValue} from '../createConext/LanguageDataSlice'

function LanguageButton() {
    const dispatch=useDispatch();
    const statee=useSelector((state)=>(state.data));
    const handle=(e)=>{
        const selectedOption = e.target.options[e.target.selectedIndex];
    
    // Now you can grab the ID attribute of that specific option
    const selectedId = selectedOption.id;
     
    console.log("The ID is:", selectedId);
    dispatch(changeValue({judge0Id:selectedId}));
    }
  return (
//<div className="flex flex-col gap-2 p-4 bg-grkay-900 rounded-t-lg border-b border-gray-700">
      //<label className="text-xs font-bold uppercase tracking-wider text-gray-400">
       // Select Environment
      //</label>
      <select 
        defaultValue={statee.id} 
        onChange={handle}
        className="w-full max-w-xs bg-gray-800 text-gray-100 text-sm rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 block p-2.5 cursor-pointer outline-none transition-all hover:bg-gray-750"
      >
        {monacoLanguages.map((one) => (
           <option key={one.id} id={one.judge0Id} value={one.id} className="bg-gray-800">
               {one.name} — {one.version}
           </option>
        ))}
      </select>
    //</div>
  )
};

export default LanguageButton