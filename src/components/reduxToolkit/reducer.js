import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "coral",
  auth:localStorage.getItem('Auth'),
  theme:false,
  search:"",
  user:null
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload
    },
    setAuth: (state, action) => {
     localStorage.setItem('Auth',true);
     state.user=action.payload.user
    }, 
    logOuttt:(state,action)=>{
      localStorage.removeItem('Auth');
      state.user=action.payload
    },
    setTheme: (state, action) => {
     state.theme = action.payload
    }, 
    setSearch: (state, action) => {
     state.search = action.payload
    }, 
  },
})

export const { setColor,logOuttt ,setAuth ,setTheme,setSearch} = colorSlice.actions


export default colorSlice.reducer