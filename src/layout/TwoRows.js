import styled from 'styled-components'

const TwoRows=styled.div`
    display:flex;
    flex-direction:column;
    height:100%;

    & > :nth-child(1) {
        height:150px;
        flex: 0 0 auto;
    }
    & > :nth-child(2) {
        flex: 1 1 100%;
    }
`

export default TwoRows