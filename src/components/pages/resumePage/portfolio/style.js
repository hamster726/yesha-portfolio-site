import styled, {css} from "styled-components";
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
  text-align: center;
  color: #333;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 40px;
`

const PortfolioRow = styled(Row)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`
const Project = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 0 10px 40px 10px;

  border-radius: .25rem;
  max-width: 350px;
  max-height: 500px;


  overflow: hidden;

  background-color: white;

  transition: 0.2s;


  &:hover {
    transform: translateY(-10px);

    -webkit-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.75);
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`

const ImgContainer = styled.a`
  width: 100%;
  height: 336px;
`

const ProjectImg = styled.img`
  width: 100%;
`
const ProjectDescription = styled.h4`
  margin: 35px 0;
  font-size: 18px;
`

const Tools = styled(Row)`
  display: flex;
  width: 100%;
  margin: 0 10px;
`

const Tool = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  ${props => props.github && css`
    width: 50px;
    height: 30px;
  `}
`
const GitHubLink = styled.a`
  margin-left: auto;
  height: 30px;
  width: auto;
  margin-right: 10px;
`

export {
  StyledContainer,
  StyledRow,
  Description,
  PortfolioRow,
  Project,
  ImgContainer,
  ProjectImg,
  ProjectDescription,
  Tools,
  Tool,
  GitHubLink
}
