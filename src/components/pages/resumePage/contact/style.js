import styled from "styled-components";
import {Container, Row, Col, Form} from 'reactstrap';



const StyledContainer = styled(Container)`
display: flex;
align-items: center;
flex-direction: column;
min-height: 500px;
background-color: #111;
padding: 90px 20px;

@media screen and (max-width: 768px) {
min-height: calc(var(--vh, 1vh) * 101);
}
`

const StyledRow = styled(Row)`
width: 25%;

@media screen and (max-width: 768px){
width: 100%;    
}
`

const Description = styled.h2`
text-align:center;
color: #eee;
font-size: 1.75rem;
font-weight: bold;
margin-bottom: 40px;
`

const ContactsForm = styled(Form)`
width: 100%;
`

export {
    StyledContainer,
    Description,
    ContactsForm,
    StyledRow
}