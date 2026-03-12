import { createSlice } from '@reduxjs/toolkit';
import { monacoLanguages } from '../Constants/Constants';
const ApiDataSlice = createSlice({
  name: 'ApiData',
  initialState: { 
    name:'C++',
    isLoading:false,
    output:"Hello World",
    value :'#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\" << std::endl;\n    return 0;\n}'
   },
  reducers: {
    setApiData: (state,action) => {
     state.name=action.payload.name;
     state.value=action.payload.value;
     console.log(action.payload.name," ",action.payload.value)
      
    },
    setIsLoad: (state,action)=>{
        state.isLoading=action.payload.isLoading;
    },
    setOutput:(state,action)=>{
        state.output=action.payload
    }
  }
});

export const { setApiData,setIsLoad,setOutput } = ApiDataSlice.actions;
export default ApiDataSlice.reducer