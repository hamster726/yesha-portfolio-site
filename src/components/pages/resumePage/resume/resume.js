import React from "react";
import {Container, Col} from "reactstrap";
import {StyledRow, StyledContainer, ColAboutSection, ColDescription, ColHeadingH3} from "./style";

const Resume = () => {
    return (
        <StyledContainer fluid id={'#resume'}>
            <StyledRow xs={1} md={2} xl={2}>
                <ColAboutSection>
                    Education
                </ColAboutSection>
                <ColDescription>
                    <ColHeadingH3>
                        Igor Sikorsky Kyiv Polytechnic Institute
                    </ColHeadingH3>
                    Learn 2013-2017<br/>
                    Bachelour degree
                </ColDescription>
            </StyledRow>
            <StyledRow xs={1} md={2} xl={2}>
                <ColAboutSection>
                    Work
                </ColAboutSection>
                <ColDescription>
                    <ColHeadingH3>
                        Microlab™
                    </ColHeadingH3>
                    Word  February 2018 - now<br/>

                </ColDescription>
            </StyledRow>
        </StyledContainer>
    )
}
export default Resume;
