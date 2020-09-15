import React from "react";
import styled from 'styled-components';
import {Col} from 'reactstrap';




let StyledNavContainer = styled.div`
z-index: 9999;
display:flex;
justify-content: center;
width: 100%;
position:fixed;
top:0;
background-color: transparent;
@media only screen and (max-width: 767px) {
justify-content: flex-start;

}

`



const Banner = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
max-width: 900px;

`
const BannerText = styled.h1`
font-size: 4rem;
text-align: center;
margin-bottom: 30px;

@media screen and (max-width: 768px) {
font-size: 2rem;
}
`

const BannerDescription = styled.p`
text-align: center;
font-size: 1.25rem;
`

const BannerButtonContainer = styled.div`
display: flex;
width: 320px;
justify-content: space-around;


`


let vh = window.innerHeight * 0.01;
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
})
document.documentElement.style.setProperty('--vh', `${vh}px`);

const HeaderRow = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: calc(var(--vh, 1vh) * 100);
`

const StyledLink = styled.a`
color: inherit;
text-decoration: none;

transition: 0.3s;

&:hover {
color: #FBB124;
text-decoration: none;

}
`
const IconsCol = styled(Col)`
font-size: 2rem;

transition: 0.3s;

&:hover {
color: #FBB124;
}
`


export {
    StyledNavContainer,
    Banner,
    BannerText,
    BannerDescription,
    HeaderRow,
    BannerButtonContainer,
    StyledLink,
    IconsCol
}
