import React from 'react'
import TwoRows from './layout/TwoRows'
import FixedMiddleMargin from './layout/FixedMidlle'
import styled from 'styled-components'
import Header from './components/Header'
import Content from './components/Content'
import SlideOut from './components/SlideOut'
import './App.css'
import { Route, Switch } from 'react-router-dom'

const Wrapper = styled.div`
    ${'' /* margin-top:20px; */}
    background-color:rgb(229,221,195);
    width:100%;
    position:relative;
    height:100%;
    padding-bottom:5000px;
    margin-bottom:-5000px;
    overflow:hidden;
`

const App = () => {
    return (
        <FixedMiddleMargin>
            <Wrapper>
                <SlideOut />
                <Header />
                <Switch>
                <Route exact path='/' 
                    component={(props) => <Content {...props} filter='all'/>}/>
                    <Route path='/like' 
                    component={(props) => <Content {...props} filter='like'/>}/>
                    <Route path='/block' 
                    component={(props) => <Content {...props} filter='block'/>}/>
                </Switch> 
            </Wrapper>
        </FixedMiddleMargin>
    )
}
export default App
