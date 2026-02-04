import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUrl } from './PostSlice/PostSlice';

const loadingMsg = "Data is loading from API. Please wait...";
const errorMsg = "Failed to fetch data, try again later."

const FetchPosts = () => {
  const {isLoading, postsData, isError} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUrl());
  }, []);
  return (
    <div className="card w-100 w-md-50">
                    <div  className="badge">
                      <p>RTK - Counter App</p>
                    </div>
                    
                    {postsData.slice(0,4).map((data) => {
                      const {title, id} = data;
                      return (
                      <div key={id} className='d-flex justify-between pt-2 pb-2'>
                        <p>Title: {title}</p>
                        <p>Id: {id}</p>
                      </div> 
                    )})} 

                    {isLoading && <p>{loadingMsg}</p>} 
                    {isError && <p>{errorMsg}</p>} 
          </div>
  )
}

export default FetchPosts