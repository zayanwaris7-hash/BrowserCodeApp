import { createSlice } from '@reduxjs/toolkit';
import { monacoLanguages } from '../Constants/Constants';
const InputSlice = createSlice({
  name: 'Input',
  initialState: { 
    
    value :''
   },
  reducers: {
    setInput: (state,action) => {
     state.value=action.payload.val;
      
    }
  }
});

export const { setInput } = InputSlice.actions;
export default InputSlice.reducer