import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "coral",
  auth:false,
  theme:false,
  search:""
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
    setSearch: (state, action) => {
     state.search = action.payload
    }, 
  },
})

export const { setColor ,setAuth ,setTheme,setSearch} = colorSlice.actions


export default colorSlice.reducer