import React from 'react'

const Counter = () => {
  return (
    <>
      <div className='card mt-3 mb-3 text-center'>
        <h1>React Redux</h1>
      </div>

      <div className="card w-50">
        <div  className="badge">
          <p>Counter App</p>
        </div>
        <div>
          <h1 className='mb-2'>
            Counter : 0
          </h1>
          <button className='btn'>Increment++</button>
        </div>

      </div>
    </>
  )
}

export default Counter