import { createSlice } from "@reduxjs/toolkit"

const initial ={
    color:"coral",
}

export const colorSlice = createSlice({
    name:"color",
    initial,
    reducers: {
        changeColor:(state,action)=>{
            state.color=action.payload
        },
        
        
    }
})
export const {changeColor} = colorSlice.actions;
export default colorSlice;

