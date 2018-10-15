import { combineReducers } from 'redux'
import { fetchData } from './fetchData'
import { pagination } from './pagination'
import { sortStatus } from './sortStatus'
import { filterList } from './filterList'

const reducers=combineReducers({
    fetchData,
    pagination,
    sortStatus,
    filterList
} )

export default reducers