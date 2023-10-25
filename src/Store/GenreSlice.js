import {createSlice } from '@reduxjs/toolkit'
const initialState = {
  Genres: [],
  GenresMovie:[],
  isLoading: true,
  error: null,
}
export const GenresSlice = createSlice({
  name: 'GenreExplore',
  initialState,
  reducers: {
  getloading:(state,action)=>{
  state.isLoading=true;
  },
  getGenredata:(state,action)=>{
  state.isLoading=false;
  state.Genres=action.payload;
  },
  getGenreMovie:(state,action)=>{
  state.isLoading=false;
  state.GenresMovie=action.payload;
  }
  }
})
export default GenresSlice.reducer;
export const {getloading,getGenreMovie,getGenredata}=GenresSlice.actions;
