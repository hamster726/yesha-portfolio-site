import styled from "styled-components";
import {Container, Col, Button, Row} from "reactstrap";

const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
padding: 90px 20px;
min-height: 500px;
background-color: #111;
color: white;

@media screen and (max-width: 768px) {
min-height: calc(var(--vh, 1vh) * 101);
}

`

const Avatar = styled.img`
display: flex;
justify-content: center;
align-items:center;
border-radius: 50%;
width: 200px;
height: 200px;
margin-bottom: 50px;
`
const DescriptionH3 = styled.h3`
display:flex;
justify-content: left;
width:100%;
font-size: 2rem;
font-weight: bold;
margin-bottom: 20px;
`
const Description = styled.p`
color: #666;
font-size: 1rem;
text-align: left;
margin-right: auto;
`

const StyledCol = styled(Col)`
display:flex;
justify-content: center;
align-items: left;
flex-direction: column;

@media screen and (max-width: 768px) {
align-items: center;

}
`

const StyledRow = styled(Row)`
width: 100%;
max-width: 900px;
`

const ButtonResume = styled(Button)`
margin: 30px 0;

`

const StyledLink = styled.a`
color: inherit;
text-decoration: none;

transition: 0.3s;

&:hover {
color: white;
text-decoration: none;

}
`

export {
    StyledContainer,
    Avatar,
    Description,
    StyledCol,
    DescriptionH3,
    ButtonResume,
    StyledRow,
    StyledLink

}
