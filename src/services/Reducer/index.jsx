import { DECREMENT, INCREMENT, RESET } from "../Constants";
import { initialCounter } from "../InitialCounter";

export const Reducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        count : state.count + 1
      }
    case DECREMENT:
      return{
        ...state,
        count : state.count - 1
      }
    case RESET:
      return{
        ...state,
        count : 0
      }
  
    default:
      return state;
  }
}

