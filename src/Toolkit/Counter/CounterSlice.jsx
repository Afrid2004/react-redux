import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const CounterSlice = createSlice({
  name : "Counter",
  initialState : {
    count : 0
  },
  reducers : {
    increment : (state) => {
      state.count = state.count + 1;
    },
    decrement : (state) => {
      state.count = state.count - 1;
    },
    incrementByFive : (state, action) => {
      state.count = state.count + action.payload;
    },
    reset : (state) => {
      state.count = 0;
    },
  }
});

export const{increment , decrement, reset, incrementByFive} = CounterSlice.actions;
export default CounterSlice.reducer;