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
justify-content: space-around;

`
const Project = styled(Col)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 10px;
margin-bottom: 40px;

border-radius: .25rem;
max-width: 350px;
max-height: 500px;


overflow:hidden;

background-color: white;
-webkit-box-shadow: 0px 0px 20px 0px rgba(100,100,100,0.75);
-moz-box-shadow: 0px 0px 20px 0px rgba(100,100,100,0.75);
box-shadow: 0px 0px 20px 0px rgba(100,100,100,0.75);

transition: 0.2s;

&:hover {
transform: scale(1.05);
}
`

const ProjectImg = styled.img`
width: 100%;
`
const ProjectDescription = styled.p`
margin-top: 20px;
`

const Tools = styled(Row)`
display: flex;
width: 100%;
margin: 0 10px;
`

const Tool = styled.img`
width: 30px;
margin: 0 5px;
`

export {
    StyledContainer,
    StyledRow,
    Description,
    PortfolioRow,
    Project,
    ProjectImg,
    ProjectDescription,
    Tools,
    Tool
}
