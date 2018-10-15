import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { loadState } from './localStorage'
import { LIKE_MOVIE, BLOCK_MOVIE } from './actions/actiontype'

const persistedState = loadState()
// console.log('persistedstate',persistedState)
const localStorageMiddleware = store => next => action => {
    if (action.type === LIKE_MOVIE || action.type === BLOCK_MOVIE){
        const result = next(action)
        console.log('results',result)
        localStorage.setItem('state',JSON.stringify({
            filterList:{
                likeList:(store.getState()).filterList.likeList,
                blockList:(store.getState()).filterList.blockList
            }
        }))
        return result
    }
    return next(action)
}

const middleware = applyMiddleware(thunk, createLogger(), localStorageMiddleware)

const store = createStore(reducer, persistedState, middleware)

export default store