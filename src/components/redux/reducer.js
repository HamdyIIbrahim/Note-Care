const init ={
    color:"coral"
}

export default function Reducer(state=init,action){
    switch(action.type){
        case"SET_COLOR":
        return{
            ...state,
            color:action.payload
        }
        default:
            return state
    }
}