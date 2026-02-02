import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../services/Actions/TodosAction';
import { loadingMsg } from '../services/Constants/TodosConstants';

const FetchData = () => {
  const {isLoading, isError, todos} = useSelector((state) => state.TodosReducer);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getTodos());
  }, [])

  return (
          <div className="card w-100 w-md-50">
            <div  className="badge">
              <p>Fetch Data</p>
            </div>
            {todos.slice(0,4).map((todo) => {
              const {id, title} = todo;
              return <div className='d-flex justify-between pt-2 pb-2' key={id}>
                <p>Title: {title}</p>
                <p>Id: {id}</p>
              </div>
            })}
            <p>{isLoading && loadingMsg} {isError && isError}</p>
          </div>
  )
}

export default FetchData