import styled from "styled-components";
import {Row, Container, Col, Progress} from "reactstrap";





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

const ColSection = styled(Col)`
display:flex;
align-items: flex-start;

@media screen and (max-width: 768px) {

margin-bottom: 50px;
}
`

const SectionText = styled.div`
text-align:left;
font-size: 1.75rem;
font-weight: bold;
padding: 0 10px;
border-bottom: 3px solid #FBB124;
border-left: 3px solid #FBB124;


`

const SectionImg = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding:0;
margin:0;

width: 45px;

font-size: 1.75rem;
font-weight: bold;
background-color: #FBB124;
color: white;
border-bottom: 3px solid #FBB124;

border-top-left-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;

&:before {
content: "/"
}
`


const ColDescription = styled(Col)`
text-align: left;
font-size: 1.1rem;
color: #aaa;

`

const ColText = styled.p`
color: #555;
margin-bottom: 3rem;
`


const ColLabel = styled.div`
display: flex;
font-size: 1.25rem;
margin-bottom: 10px;
font-weight: normal;
color: #222;
margin-left: ${props => (props.skills ? `15px` : '0px')};

`



const ColCompany = styled.i`
display: inline-block;
margin-bottom: 10px;

`

const ColData = styled.div`
display: inline-block;

`

const SkillProgress = styled(Progress)`
height: 30px;
margin-bottom: 10px;
`
const SkillRow = styled(Row)`
justify-content: space-between;
`

export {
    StyledRow,
    StyledContainer,
    ColSection,
    ColDescription,
    ColLabel,
    ColText,
    ColCompany,
    ColData,
    SkillProgress,
    SkillRow,
    SectionText,
    SectionImg
}
