import { createSelector } from 'reselect'

const pageLoad = state => state.pagination.pageLoad
const movieList = state => state.fetchData.movielist
const currentPage = state => state.pagination.currentPage
const sortStatus = state => state.sortStatus.sortBy
const likeList = state => state.filterList.likeList
const blockList = state => state.filterList.blockList
const filter = (state,props) => props.filter

const filterList=createSelector([movieList,likeList,blockList,filter]
    ,(movieList,likeList,blockList,filter) => {
        const blockListId=blockList.map(item=>item.id)
        console.log('selectorfilter',filter)
    switch (filter){
        case 'all':
        return movieList.filter(item=>{
            if (blockListId.indexOf(item.id)===-1){
                return item
            }
            return 
        })
        case 'like':
        return likeList
        case 'block':
        return blockList
        default:
        return movieList
    }

})

const lastPage = createSelector([filterList, pageLoad], 
                    (filterList, pageLoad) => {
    const lastPage = Math.ceil(filterList.length / pageLoad)
    return lastPage
})

const sortList = createSelector([filterList, sortStatus], (filterList, sortStatus) => {
    const sortList = filterList.slice(0)
    switch (sortStatus) {
        case 'title':
            return sortList.sort((a, b) => {
                const nameA = a.title.toUpperCase(); // ignore upper and lowercase
                const nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            })
        case 'voteCount':
            return sortList.sort((a,b)=>{
                return b.vote_count - a.vote_count 
            })
        case 'voteAverage':
            return sortList.sort((a,b)=>{
                return b.vote_average - a.vote_average
            })
        case 'releaseDate':
            return sortList.sort((a,b)=>{
                return new Date(b.release_date) - new Date(a.release_date)
            })
        default:
            return sortList
    }
})

const currentMovieList = createSelector([sortList, currentPage, pageLoad], (sortList, currentPage, pageLoad) => {
    return sortList.slice((currentPage * pageLoad - pageLoad), currentPage * pageLoad)
})

const likeListId = createSelector([likeList],likeList => {
    return likeList.map(item => item.id)
})

export {
    lastPage,
    currentMovieList,
    likeListId
}