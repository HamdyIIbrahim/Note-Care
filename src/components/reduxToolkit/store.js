import { configureStore } from '@reduxjs/toolkit'
import colorReducer from '../reduxToolkit/reducer';
export const store = configureStore({
  reducer: {
    color:colorReducer
  },
})