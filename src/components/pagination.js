import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { lastPage } from '../selectors'
import { ArrowLeftCircle } from 'styled-icons/feather/ArrowLeftCircle'
import { ArrowRightCircle } from 'styled-icons/feather/ArrowRightCircle'
import { rightFlip,leftFlip } from '../actions'
import { withRouter } from 'react-router'
import { compose } from 'redux'

const StyledP = styled.p`
    margin:0;
`
const PaginationLayout = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    align-items:center;
`
const Pagination = (props) => {
    const {
        currentPage,
        lastPage,
        rightFlip,
        leftFlip
    } = props
    return (
        <PaginationLayout>
            {
                (currentPage - 1)
                ? <ArrowLeftCircle size='32px' onClick={
                    ()=>{leftFlip()}
                }/>
                : <ArrowLeftCircle size='32px' style={{ visibility:"hidden" }} />
            }
            <StyledP>{`${currentPage}/${lastPage}`}</StyledP>
            {
                (lastPage-currentPage)
                ? <ArrowRightCircle size='32px' onClick={
                ()=>{rightFlip()}
                }/>
                :<ArrowRightCircle size='32px' style={{ visibility:"hidden" }} />
            }
           
        </PaginationLayout>
    )
}

const mapStateToProps = (state,props) => {
    return {
        currentPage: state.pagination.currentPage,
        lastPage: lastPage(state,props)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        rightFlip: () => { dispatch(rightFlip()) },
        leftFlip: () => { dispatch(leftFlip()) }
    }
}

const withconnect= connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(
    withRouter,
    withconnect
)(Pagination)