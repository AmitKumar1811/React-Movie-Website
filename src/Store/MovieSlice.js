import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  credit:[],
  similiar:[],
  moviedata:[],
  isloading:true,
};

export const MovieSlice = createSlice({
  name: "MovieId",
  initialState,
  reducers: {
  movieId:(state,action)=>{
  state.value=action;
  },
  getmoviedata: (state, action) => {
  state.moviedata=action.payload;
  },
  getmovieCredit:(state,action)=>{
  state.credit=action.payload;
  },
  getloadingdata:(state,action)=>{
  state.isloading=true;
  },
  getmovieSimiliar:(state,action)=>{
  state.isloading=false;
  state.similiar=action.payload;
  }
  },
});

export const { getmoviedata,getmovieSimiliar,getmovieCredit,movieId,getloadingdata} = MovieSlice.actions;
export default MovieSlice.reducer;
