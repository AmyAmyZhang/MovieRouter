import {
    LIKE_MOVIE,
    BLOCK_MOVIE
} from '../actions/actiontype'

const initialState = {
    likeList: [],
    blockList: [],
}

const filterList = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_MOVIE:
            console.log('before', state)
            const likeListId = state.likeList.map((item) => {
                return item.id
            })
            // check if this movie has been added before, and 
            //also check if the blocklist has this movie and remove from block
            return (likeListId.indexOf(action.payload.id) === -1)
                ? {
                    ...state,
                    likeList: [...state.likeList, action.payload],
                    blockList: state.blockList.filter(item => {
                        if (item.id === action.payload.id) {
                            return
                        }
                        return item
                    })
                }
                : state

        case BLOCK_MOVIE:
            const blockListId = state.blockList.map((item) => {
                return item.id
            })
        
            return (blockListId.indexOf(action.payload.id) === -1)
                ? {
                    ...state,
                    blockList: [...state.blockList, action.payload],
                    likeList: state.likeList.filter(item => {
                        if (item.id === action.payload.id) {
                            return
                        }
                        return item
                    })
                }
                : state
        default:
            return state

    }

}
export { filterList }

