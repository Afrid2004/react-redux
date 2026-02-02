import React from 'react'
import { combineReducers } from 'redux'
import { Reducer } from '.'
import { TodosReducer } from './TodosReducer'

export const RootReducer = combineReducers({
  Reducer : Reducer,
  TodosReducer: TodosReducer
});
