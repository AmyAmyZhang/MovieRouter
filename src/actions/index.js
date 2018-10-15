import{
    REQUEST_END,
    REQUEST_START,
    RIGHT_FLIP,
    LEFT_FLIP,
    SORT_LIST,
    LIKE_MOVIE,
    BLOCK_MOVIE
} from './actiontype'

const requestStart = (payload) => ({
    type: REQUEST_START,
    payload
})

const requestEnd = (payload) => ({
    type: REQUEST_END,
    payload
})
const rightFlip=()=>({
    type:RIGHT_FLIP
})
const leftFlip=()=>({
    type:LEFT_FLIP
})
const sortList=(payload)=>({
    type:SORT_LIST,
    payload
})
const likeMovie=(payload)=>({
    type:LIKE_MOVIE,
    payload
})
const blockMovie=(payload)=>({
    type:BLOCK_MOVIE,
    payload
})
const getData = (dispatch) => {
    console.log('action', dispatch)
    dispatch(requestStart())
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US')
        .then(response => response.json())
        .then(response => {
           dispatch(requestEnd(response.results))
        })
        .catch(error => {
            console.log(error)
        })
}

export {
    getData,
    rightFlip,
    leftFlip,
    sortList,
    likeMovie,
    blockMovie
}