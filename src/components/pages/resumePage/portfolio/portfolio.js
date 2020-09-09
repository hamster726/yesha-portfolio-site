import React from "react";
import {StyledContainer, Description, PortfolioRow, Project, ProjectImg} from './style';
import GotImage from './snap-react-got-wiki.png'

const Portfolio = () => {
    return (
        <StyledContainer fluid>
            <Description>Check out my projects 💪</Description>
            <PortfolioRow xs={1} md={4}>
                <Project>
                    <a href='https://react-got-wiki.web.app/' target='_blank'>
                        <ProjectImg src={GotImage}></ProjectImg>
                        Game of Thrones Wiki
                    </a>
                </Project>
                <Project>
                    <a href='https://restaurant-app-yesha.web.app' target='_blank'>
                        Restaurant-app
                    </a>
                </Project>
                <Project>
                    Simple Blog
                </Project>
            </PortfolioRow>
        </StyledContainer>
    )
}

export default Portfolio;
