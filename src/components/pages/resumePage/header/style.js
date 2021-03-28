import styled from 'styled-components';
import {Col, Navbar, NavItem} from 'reactstrap';




const StyledNavContainer = styled.div`
z-index: 9999;
display:flex;
justify-content: center;
width: 100%;
position:fixed;
top:0;
background-color: rgba(255, 255, 255, 0.5);

@media only screen and (max-width: 767px) {
justify-content: flex-start;
background-color: transparent;
}
`

const StyledNavbar = styled(Navbar)`

@media only screen and (max-width: 767px) {
background-color: rgba(255, 255, 255, 0.7);
padding: 0;
margin: 16px;
border-radius: 0.25rem;
}
`

const LangSwitcher = styled(Navbar)`
position: absolute;
right: 0px;
top: 0px;

list-style-type: none;

@media only screen and (max-width: 767px) {

background-color: rgba(255, 255, 255, 0.7);
padding: 0;
margin: 16px;
border-radius: 0.25rem;
}
`

const StyledNavItem = styled(NavItem)`

cursor: pointer;

@media only screen and (max-width: 767px) {
padding-left: 1rem;;
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
width: 100px;
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
    IconsCol,
    StyledNavbar,
    StyledNavItem,
    LangSwitcher
}
