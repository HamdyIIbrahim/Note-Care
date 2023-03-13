import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "coral",
  auth:false,
  theme:false
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload
    },
    setAuth: (state, action) => {
     state.auth = action.payload
    }, 
    setTheme: (state, action) => {
     state.theme = action.payload
    }, 
  },
})

export const { setColor ,setAuth ,setTheme} = colorSlice.actions


export default colorSlice.reducer