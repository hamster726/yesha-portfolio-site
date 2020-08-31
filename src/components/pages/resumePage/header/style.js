import React from "react";
import styled from 'styled-components';
import {Button} from 'reactstrap';

const StyledNavContainer = styled.div`
display:flex;
justify-content: center;
width: 100%;

position:fixed;
top:0;

@media only screen and (max-width: 767px) {
justify-content: flex-start;
}
`

const Banner = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 500px;

`
const BannerText = styled.h1`
font-size: 5rem;
text-align: center;
margin-bottom: 30px;
`

const BannerDescription = styled.p`
text-align: center;
font-size: 1.25rem;
`

const BannerButtonContainer = styled.div`
display: flex;
width: 60%;
justify-content: space-around;

@media screen and (max-width: 320x){
width: 80%;
}
@media screen and (max-width: 768px){
width: 100%;
}

`

const HeaderRow = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
`


export {
    StyledNavContainer,
    Banner,
    BannerText,
    BannerDescription,
    HeaderRow,
    BannerButtonContainer
}