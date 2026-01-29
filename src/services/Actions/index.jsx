import { DECREMENT, INCREMENT, RESET } from "../Constants"

export const incrementNumber = () => {
  return{
    type : INCREMENT
  }
}

export const decrementNumber = () => {
  return{
    type : DECREMENT
  }
}

export const resetNumber = () => {
  return{
    type : RESET
  }
}