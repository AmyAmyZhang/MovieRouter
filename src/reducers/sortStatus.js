import { SORT_LIST } from '../actions/actiontype'

const initialState={
    sortBy:''
}
const sortStatus=(state=initialState,action)=>{
    switch (action.type) {
        case SORT_LIST:
        return {
            ...state,
            sortBy:action.payload
        }
        default:
        return state
    }
}

export { sortStatus }