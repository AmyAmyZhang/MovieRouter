import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Wrapper = styled.div`
height:100%;
position:fixed;
width:20px;
z-index:15;
&:hover :first-child{
    transform: none;
}
`

const Menu = styled.div`
height:100%;
width:300px;
background-color:#E1C595;
transform:translateX(-100%);
transition: transform 0.8s ease-in-out;
`
const StyledUl = styled.ul`
padding:50px 20px 20px;
list-style:none;
`
const StyledLi = styled.li`
padding:10px;
`
const StyledLink = styled(Link)`
text-decoration:none;
color:white;
&:visited{
  text-decoration:none;
  color:blue;
}
`

const SlideOut = () => {
  return (
    <Wrapper>
      <Menu>
        <StyledUl>
          <StyledLi>
            <StyledLink to={'/'}>
              All Movies
          </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={'/like'}>
              Liked Movies
          </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={'/block'}>
              Blocked Movies
          </StyledLink>
          </StyledLi>
        </StyledUl>
      </Menu>
    </Wrapper>
  )
}
export default SlideOut
