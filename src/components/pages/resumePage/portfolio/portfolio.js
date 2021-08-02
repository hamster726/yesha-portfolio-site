import React, {Component} from "react";
import {
  StyledContainer,
  Description,
  PortfolioRow,
  Project,
  ProjectImg,
  ProjectDescription,
  Tools,
  Tool, GitHubLink,
  ImgContainer
} from './style';
import GotImage from './img/snap-react-got-wiki.jpg'
import BlogImage from './img/snap-react-miniBlog.jpg'
import CalculatorImage from './img/snap-react-calculator.png'
import StopwatchImage from './img/snap-react-stopwatch.png'
import RunSmartImage from './img/snap-react-runsmart.png'
import ReactPizzaHubImg from './img/snap-react-pizzahub.png'

import JSIco from './img/tools/javascript.svg'
import ReactIco from './img/tools/react.svg'
import ReduxIco from './img/tools/redux.svg'
import ReactRouterIco from './img/tools/react-router.svg'
import GulpIco from './img/tools/gulp.svg'
import SassIco from './img/tools/sass.svg'
import GithubIco from './img/tools/github-2.svg'
import StyledComponentsIco from './img/tools/styled-components.png'


class Portfolio extends Component {

  renderProject(githubLink, demoLink, preImg, descr, js = false, react = false, redux = false, reactRouter = false, gulp = false, sass = false, styledComponents = false) {
    return (
      <Project>
        <ImgContainer href={demoLink} target='_blank' rel="noopener noreferrer">
          <ProjectImg src={preImg} alt='descr'/>
        </ImgContainer>
        <ProjectDescription>{descr}</ProjectDescription>
        <Tools>
          {js ? <Tool src={JSIco} alt='JavaSctript'/> : ''}
          {react ? <Tool src={ReactIco} alt='React'/> : ''}
          {redux ? <Tool src={ReduxIco} alt='Redux'/> : ''}
          {reactRouter ? <Tool src={ReactRouterIco} alt='React-router'/> : ''}
          {sass ? <Tool src={SassIco} alt='Gulp'/> : ''}
          {gulp ? <Tool src={GulpIco} alt='Gulp'/> : ''}
          {styledComponents ? <Tool src={StyledComponentsIco} alt='Gulp'/> : ''}
          {githubLink ? <GitHubLink href={githubLink} target="_blank"><Tool github src={GithubIco}/></GitHubLink> : ''}


        </Tools>
      </Project>
    )
  }

  render() {
    const data = this.props.data.portfolio;

    return (
      <StyledContainer fluid id='#portfolio'>
        <Description>{data.heading}</Description>
        <PortfolioRow xs={1} md={3}>
          {this.renderProject(
            'https://github.com/hamster726/pizza-hub',
            'https://yesha-pizza-hub.web.app/',
            ReactPizzaHubImg,
            'Pizza Hub',
            true,
            true,
            true,
            true,
            false,
            false,
            true
          )}
          {this.renderProject(
            'https://github.com/hamster726/stopwatch',
            'https://yesha-stopwatch.web.app/',
            StopwatchImage,
            'Stopwatch',
            true,
            true,
            true,
            true,
            false,
            true
          )}
          {this.renderProject(
            'https://github.com/hamster726/yesha-calculator',
            'https://yesha-calculator.web.app/',
            CalculatorImage,
            'Calculator',
            true,
            true,
            true,
            false,
            true
          )}
          {this.renderProject(
            'https://github.com/hamster726/webdev-courses/tree/master/runsmart-pulsometers_layout',
            null,
            RunSmartImage,
            'RunSmart pulsometer (Landing Page)',
            true,
            false,
            false,
            false,
            true,
            true
          )}
          {this.renderProject(
            'https://github.com/hamster726/react-got-app',
            'https://react-got-wiki.web.app/',
            GotImage,
            'Game of Thrones Wiki',
            true,
            true,
            false,
            true,
          )}
          {this.renderProject(
            'https://github.com/hamster726/my-app',
            'https://mini-blog-yesha.web.app',
            BlogImage,
            'TODO list',
            true,
            true,
          )}
        </PortfolioRow>
      </StyledContainer>
    )
  }

}

export default Portfolio;
