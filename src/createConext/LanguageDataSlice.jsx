import { createSlice } from '@reduxjs/toolkit';
import { monacoLanguages } from '../Constants/Constants';
const LanguageDataSlice = createSlice({
  name: 'data',
  initialState: { 
    id:'cpp',
    name:'C++',
    version:'C++20',
    syntax:'#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\" << std::endl;\n    return 0;\n}'
   },
  reducers: {
    changeValue: (state,action) => {
        const selectedLang = monacoLanguages.find(lang => lang.id === action.payload);
      
      if (selectedLang) {
        // We update the state with the new language details
        state.id = selectedLang.id;
        state.name = selectedLang.name;
        state.version = selectedLang.version;
        state.syntax = selectedLang.syntax;
      }
    }
  }
});

export const { changeValue } = LanguageDataSlice.actions;
export default LanguageDataSlice.reducer