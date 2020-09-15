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
text-align:left;
font-size: 1.75rem;
text-decoration: underline #007bff;
margin-bottom: 50px;

`


const ColDescription = styled(Col)`
text-align: left;
font-size: 1.1rem;
color: #aaa;
`

const ColText = styled.p`
color: #555;
`


const ColLabel = styled.div`
display: flex;
font-size: 1.25rem;
margin-bottom: 10px;
font-weight: normal;
color: #222;
padding-left: 15px;

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
    SkillRow
}
