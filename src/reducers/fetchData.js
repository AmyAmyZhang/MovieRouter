import {
    REQUEST_START,
    REQUEST_END
} from '../actions/actiontype'

const initialState={
    movielist:[],
    loading:false
}
const fetchData=(state=initialState,action)=>{
    switch (action.type){
        case REQUEST_START:
        return {
            ...state,
            loading:true
        }
        case REQUEST_END:
        return {
            ...state,
            movielist:action.payload,
            loading:false
        }
        default:
        return state

    }
}

export { fetchData }