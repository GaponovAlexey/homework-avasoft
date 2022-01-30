import { configureStore } from '@reduxjs/toolkit'
import myReducerSlice  from './reducer'

export const store = configureStore({
  reducer: {
    red: myReducerSlice,
  }
})
