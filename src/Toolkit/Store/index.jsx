import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Counter/CounterSlice';
import PostReducer from '../PostSlice/PostSlice'

export const RTKStore = configureStore({
  reducer : {
    counter : CounterReducer,
    posts : PostReducer
  },
})