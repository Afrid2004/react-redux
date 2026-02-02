import axios from "axios";
import { errorMsg, GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, loadingMsg } from "../Constants/TodosConstants"

export const getTodos = () => async (dispatch) => {
  dispatch({type : GET_TODOS_REQUEST, payload : loadingMsg});
  try{
    const fetchData = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({type: GET_TODOS_SUCCESS, payload : fetchData.data});
  }catch(error){
    dispatch({type : GET_TODOS_FAILED, payload : errorMsg});
  }
}