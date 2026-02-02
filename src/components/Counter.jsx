import React from 'react'
import { decrementNumber, incrementNumber, resetNumber } from '../services/Actions'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const {count} = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card w-100 w-md-50">
        <div  className="badge">
          <p>Counter App</p>
        </div>
        <div>
          <h1 className='mb-3'>
              Counter : {count} <small>(limit 5)</small>
          </h1>
          <div className="d-flex gap-2 align-center flex-wrap">
            <button className='btn' disabled={count >= 5 ? true : false} onClick={() => {dispatch(incrementNumber())}}>Increment++</button>
            <button className='btn' disabled={count <= 0 ? true : false} onClick={() => {dispatch(decrementNumber())}}>Decrement--</button>
            <button className='btn' onClick={() => {dispatch(resetNumber())}}>Reset = 0</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Counter