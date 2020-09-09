import React from "react";
import {StyledContainer, Description, PortfolioRow, Project, ProjectImg, ProjectDescription} from './style';
import GotImage from './img/snap-react-got-wiki.jpg'
import RestoImage from './img/snap-react-restaurant.jpg'
import BlogImage from './img/snap-react-miniBlog.jpg'

const Portfolio = () => {
    return (
        <StyledContainer fluid>
            <Description>Check out my projects 💪</Description>
            <PortfolioRow xs={1} md={4}>
                <Project>
                    <a href='https://react-got-wiki.web.app/' target='_blank'>
                        <ProjectImg src={GotImage}></ProjectImg>
                    </a>
                    <ProjectDescription>Game of Thrones Wiki</ProjectDescription>
                </Project>
                <Project>
                    <a href='https://restaurant-app-yesha.web.app/menu/' target='_blank'>
                        <ProjectImg src={RestoImage}></ProjectImg>
                    </a>
                    <ProjectDescription>Restaurant app</ProjectDescription>
                </Project>
                <Project>
                    <a href='https://mini-blog-yesha.web.app/' target='_blank'>
                        <ProjectImg src={BlogImage}></ProjectImg>
                    </a>
                    <ProjectDescription>Simple Blog</ProjectDescription>
                </Project>
            </PortfolioRow>
        </StyledContainer>
    )
}

export default Portfolio;
