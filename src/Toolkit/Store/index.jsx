import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Counter/CounterSlice'

export const RTKStore = configureStore({
  reducer : {
    counter : CounterReducer
  },
})