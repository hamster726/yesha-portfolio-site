import styled from "styled-components";
import {Container, Row, Col} from 'reactstrap';


const StyledContainer = styled(Container)`
display: flex;
align-items: center;
flex-direction: column;
min-height: 500px;
background-color: #e9ecef;
padding: 90px 20px;

@media screen and (max-width: 768px) {
min-height: calc(var(--vh, 1vh) * 101);
}
`

const StyledRow = styled(Row)`
width: 100%;
max-width: 900px;
`
const Description = styled.h2`
text-align:center;
color: #333;
font-size: 1.75rem;
font-weight: bold;
margin-bottom: 40px;
`

const PortfolioRow = styled(Row)`
display: flex;
justify-content: center;
`
const Project = styled(Col)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 320px;
height: 320px;
`
const ProjectImg = styled.img`
width: 100%
`
const ProjectDescription = styled.p`
margin-top: 20px;
`

export {
    StyledContainer,
    StyledRow,
    Description,
    PortfolioRow,
    Project,
    ProjectImg,
    ProjectDescription
}
