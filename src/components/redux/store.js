import { configureStore } from '@reduxjs/toolkit'
import colorSlice from './reducer'

export const store = configureStore({
  reducer: {
    color:colorSlice
  },
})