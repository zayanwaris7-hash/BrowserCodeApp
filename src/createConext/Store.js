import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './LanguageDataSlice'
import ApidataSlice from './ApiDataslice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
    Apidata: ApidataSlice
  }
});