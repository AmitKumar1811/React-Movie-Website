import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from './MovieSlice'
import HomeSlice  from './HomeSlice'
import GenreSlice from './GenreSlice'

export const store = configureStore({
  reducer: {
   Movie:MovieSlice,
   HomeExplore:HomeSlice,
   GenreExplore:GenreSlice,
},
})

