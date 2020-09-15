import styled from "styled-components";
import {Container, Row, Col, Form} from 'reactstrap';



const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
align-items: center;
background-color: #111;
padding: 45px 20px;

@media screen and (max-width: 768px) {
flex-direction: column;
// min-height: calc(var(--vh, 1vh) * 101);
}
`

const StyledRow = styled(Row)`
max-width: 900px;
`

const Description = styled.p`
color: #666;
font-size: 1rem;
`


const EmailIconContainer = styled.span`
text-align: center;
font-size: 3rem;
color: #eee;
margin-right: 10px;
vertical-align: middle;
`

const IconsCol = styled(Col)`
font-size: 2rem;

transition: 0.3s;

&:hover {
color: white;
}
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
    Description,
    StyledRow,
    EmailIconContainer,
    IconsCol,
    StyledLink
}