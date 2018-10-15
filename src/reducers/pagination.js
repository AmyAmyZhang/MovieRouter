import { LEFT_FLIP,RIGHT_FLIP } from '../actions/actiontype'

const initialState={
    currentPage:1,
    pageLoad:3
}
const pagination=(state=initialState,action)=>{
    switch(action.type){
        case LEFT_FLIP:
        return {
            ...state,
            currentPage:state.currentPage-1
        }
        case RIGHT_FLIP:
        return {
            ...state,
            currentPage:state.currentPage+1
        }
        default:
        return state
    }
}


export { pagination }