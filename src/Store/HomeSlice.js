import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content1: [],
  content2: [],
  content3: [],
  content4: [],
  searchcontent: [],
  postercontent: [],
  searchloading: true,
  isLoading: false,
  posterloading: true,
  error: null,
};

export const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    getloading: (state, action) => {
      state.isLoading = true;
    },
    gettoprated: (state, action) => {
      state.content1 = action.payload;
      state.isLoading = false;
    },
    getnowplaying: (state, action) => {
      state.content2 = action.payload;
      state.isLoading = false;
    },
    gettvpopular: (state, action) => {
      state.content3 = action.payload;
      state.isLoading = false;
    },
    gettvrated: (state, action) => {
      state.content4 = action.payload;
      state.isLoading = false;
    },
    getposterloading: (state, action) => {
      state.posterloading = true;
    },
    getposterdata: (state, action) => {
      state.postercontent = action.payload;
      state.posterloading = false;
    },
    getsearchloading: (state, action) => {
      state.searchloading = true;
    },
    getsearchdata: (state, action) => {
      state.searchloading = false;
      state.searchcontent = action.payload;
    },
  },
});
export const {
  getloading,
  getnowplaying,
  gettoprated,
  gettvpopular,
  gettvrated,
  getposterdata,
  getposterloading,
  getsearchdata,
  getsearchloading,
} = HomeSlice.actions;
export default HomeSlice.reducer;
