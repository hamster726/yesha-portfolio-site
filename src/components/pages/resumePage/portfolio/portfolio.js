import React, {Component} from "react";
import {
    StyledContainer,
    Description,
    PortfolioRow,
    Project,
    ProjectImg,
    ProjectDescription,
    Tools,
    Tool
} from './style';
import GotImage from './img/snap-react-got-wiki.jpg'
import RestoImage from './img/snap-react-restaurant.jpg'
import BlogImage from './img/snap-react-miniBlog.jpg'
import CalculatorImage from './img/snap-react-calculator.png'
import StopwatchImage from './img/snap-react-stopwatch.png'
import RunSmartImage from './img/snap-react-runsmart.png'

import JSImg from './img/tools/javascript.svg'
import ReactImg from './img/tools/react.svg'
import ReduxImg from './img/tools/redux.svg'
import ReactRouter from './img/tools/react-router.svg'
import Gulp from './img/tools/gulp.svg'
import Sass from './img/tools/sass.svg'


class Portfolio extends Component {

    renderProject(githubLink, demoLink, preImg, descr, js = false, react = false, redux = false, reactRouter = false, gulp = false, sass = false) {
        return (
            <Project>
                <a href={githubLink} target='_blank' rel="noopener noreferrer">
                    <ProjectImg src={preImg} alt='descr'/>
                </a>
                <ProjectDescription>{descr}</ProjectDescription>
                <Tools>
                    {js ? <Tool src={JSImg} alt='JavaSctript'/> : ''}
                    {react ? <Tool src={ReactImg} alt='React'/> : ''}
                    {redux ? <Tool src={ReduxImg} alt='Redux'/> : ''}
                    {reactRouter ? <Tool src={ReactRouter} alt='React-router'/> : ''}
                    {sass ? <Tool src={Sass} alt='Gulp'/> : ''}
                    {gulp ? <Tool src={Gulp} alt='Gulp'/> : ''}


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
                        'https://yesha-stopwatch.web.app/',
                        null,
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
                        'https://yesha-calculator.web.app/',
                        null,
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
                        'https://restaurant-app-yesha.web.app/menu/',
                        null,
                        RestoImage,
                        'Restaurant app',
                        true,
                        true,
                        true,
                        true,
                    )}
                    {this.renderProject(
                        'https://react-got-wiki.web.app/',
                        null,
                        GotImage,
                        'Game of Thrones Wiki',
                        true,
                        true,
                        false,
                        true,
                    )}
                    {this.renderProject(
                        'https://mini-blog-yesha.web.app',
                        null,
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
