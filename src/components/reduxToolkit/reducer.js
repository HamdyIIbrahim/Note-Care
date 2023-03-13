import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "coral",
  auth:false
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
  },
})

export const { setColor ,setAuth } = colorSlice.actions


export default colorSlice.reducer