import styled from 'styled-components'
import React from 'react'

const FixMiddle = styled.div`
    display:flex;
    height:auto;
    min-height:100%;
    width:100%;
    

    & > :nth-child(1) {
        flex: 1 1 auto;
        background-color:white;
        z-index:20;
        padding-bottom:5000px;
        margin-bottom:-5000px;
        overflow:hidden;
    }

    & > :nth-child(2) {
        flex: 0 0 400px;
    }

    & > :nth-child(3) {
        flex: 1 1 auto;
    }
`
const FixMiddleMargin = (props) => {
    return (
        <FixMiddle>
            <div />
            {props.children}
            <div />
        </FixMiddle>
    )
}

export default FixMiddleMargin
