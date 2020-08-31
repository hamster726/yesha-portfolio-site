import styled from "styled-components";
import {Row, Container, Col} from "reactstrap";





const StyledContainer = styled(Container)`
display: flex;
align-items: center;
flex-direction:column;
min-height: calc(var(--vh, 1vh) * 100);
padding: 90px 20px;

@media screen and (max-width: 768px){
}
`

const StyledRow = styled(Row)`
display:flex;
align-items: top;
width: 100%;
max-width: 900px;
margin: 20px 0;
padding-bottom: 20px;
border-bottom: 1px solid #ddd;
`

const ColAboutSection = styled(Col)`
text-align:left;
font-size: 2rem;
text-decoration: underline;
text-decoration-color: #007bff;
margin-bottom: 50px;

`


const ColDescription = styled(Col)`
text-align: left;
font-size: 1.25rem;
color: #aaa;
`

const ColText = styled.p`
color: #888;
font-style:italic;
`


const ColHeadingH3 = styled.h3`
color: #222;
display:flex;
justify-content: left;
width:100%;
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 20px;
font-weight: normal;
font-weight: bold;
`

export {
    StyledRow,
    StyledContainer,
    ColAboutSection,
    ColDescription,
    ColHeadingH3,
    ColText
}
