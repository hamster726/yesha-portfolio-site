import React from "react";
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
import GitImg from './img/tools/git.svg'
import JSImg from './img/tools/javascript.svg'
import ReactImg from './img/tools/react.svg'
import ReduxImg from './img/tools/redux.svg'
import ReactRouter from './img/tools/react-router.svg'

const Portfolio = () => {
    return (
        <StyledContainer fluid id='#portfolio'>
            <Description>Check out my projects 💪</Description>
            <PortfolioRow xs={1} md={4}>
                <Project>
                    <a href='https://react-got-wiki.web.app/' target='_blank'>
                        <ProjectImg src={GotImage}></ProjectImg>
                    </a>
                    <ProjectDescription>Game of Thrones Wiki</ProjectDescription>
                    <Tools>
                        <Tool src={JSImg}/>
                        <Tool src={ReactImg}/>
                        <Tool src={ReactRouter}/>
                    </Tools>
                </Project>
                <Project>
                    <a href='https://restaurant-app-yesha.web.app/menu/' target='_blank'>
                        <ProjectImg src={RestoImage}></ProjectImg>
                    </a>
                    <ProjectDescription>Restaurant app</ProjectDescription>
                    <Tools>
                        <Tool src={JSImg}/>
                        <Tool src={ReactImg}/>
                        <Tool src={ReduxImg}/>
                        <Tool src={ReactRouter}/>
                    </Tools>
                </Project>
                <Project>
                    <a href='https://mini-blog-yesha.web.app/' target='_blank'>
                        <ProjectImg src={BlogImage}></ProjectImg>
                    </a>
                    <ProjectDescription>Simple Blog</ProjectDescription>
                    <Tools>
                        <Tool src={JSImg}/>
                        <Tool src={ReactImg}/>
                    </Tools>
                </Project>
            </PortfolioRow>

        </StyledContainer>
    )
}

export default Portfolio;
