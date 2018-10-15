import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Pagination from './pagination'
import {
    sortList
} from '../actions'

const TitleStyle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:'Berkshire Swash', cursive;
    height:60px;
`
const Button = styled.button`
    color:white;
    background-color:powderblue;
    font-size:12px;
    padding:5px;
    border:none;
    border-radius:3px;
`

const SortBarLayout = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:15px;
    margin-bottom:10px;
    margin-right:20px;
    margin-left:20px;
`

const SortBar = (props) => {
    const{
        sortList
    }=props
    return (
        <SortBarLayout>
            <Button
            onClick={()=>{sortList('title')}}
            >Title&darr;</Button>
            <Button
            onClick={()=>{sortList('voteCount')}}
            >Vote Count&darr;</Button>
            <Button
            onClick={()=>{sortList('voteAverage')}}
            >Vote Average&darr;</Button>
            <Button
            onClick={()=>{sortList('releaseDate')}}
            >Release Date&darr;</Button>
        </SortBarLayout>
    )
}

const HeaderLayout = styled.div`
    background-color:rgb(229,221,195);
    height:150px;
    position:fixed;
    
    width:400px;
`
const Hr=styled.hr`
    border:none;
    height:1px;
    background-color:darkgrey;
`

const Header = (props) => {
    return (
        <HeaderLayout>
            <TitleStyle>
                Our Top Rated Movies List
            </TitleStyle>
            <SortBar
            sortList={props.sortList} />
            <Hr />
            <Pagination
             />
            <Hr />
        </HeaderLayout>  
    )
}

const mapStateToProps=state=>{
    return{
        currentPage:state.pagination.currentPage
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        sortList:(payload)=>{dispatch(sortList(payload))}
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)