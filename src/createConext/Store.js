import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './LanguageDataSlice'
import ApidataSlice from './ApiDataslice'
import InputSlice from './InputSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
    Apidata: ApidataSlice,
    input : InputSlice
  }
});