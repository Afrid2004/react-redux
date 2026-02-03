import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, incrementByFive, reset } from './Counter/CounterSlice';

const ReduxToolkit = () => {
  const Counter = useSelector((state) => state.counter.count);
  const Dispatch = useDispatch();
  return (
    <div className="card w-100 w-md-50">
                <div  className="badge">
                  <p>RTK - Counter App</p>
                </div>

                <div>
                  <h1 className='mb-3'>
                      Counter : {Counter}
                  </h1>
                  <div className="d-flex gap-2 align-center flex-wrap">
                      <button className='btn' onClick={() => {Dispatch(increment())}}>Increment++</button>
                      <button className='btn' onClick={() => {Dispatch(decrement())}}>Decrement--</button>
                      <button className='btn' onClick={() => {Dispatch(incrementByFive(5))}}>Increment By 5</button>
                      <button className='btn' onClick={() => {Dispatch(reset())}}>Reset = 0</button>
                  </div>
                </div>
      </div>
  )
}

export default ReduxToolkit