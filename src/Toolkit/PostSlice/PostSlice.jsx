import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUrl = createAsyncThunk("posts/fetchUrl", async() => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
})

const PostSlice = createSlice({
  name : "posts",
  initialState : {
    isLoading : true,
    postsData : [],
    isError : false
  },
  extraReducers : (builder) => {
    builder.addCase(fetchUrl.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUrl.fulfilled, (state,action) => {
      state.isLoading = false;
      state.postsData = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchUrl.rejected, (state) => {
      state.isLoading = false;
      state.postsData = [];
      state.isError = true;
    });
  }
});

export default PostSlice.reducer;