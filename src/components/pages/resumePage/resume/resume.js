import React from "react";
import {Col} from 'reactstrap';
import {
    StyledRow,
    StyledContainer,
    ColSection,
    ColDescription,
    ColLabel,
    ColCompany,
    ColData,
    ColText,
    SkillProgress,
    SkillRow,
    SectionText,
    SectionImg
} from "./style";


const renderInfoBlock = (section, data) => {

    const renderSection = () => {
        return (
            <ColSection md={4}>
                <SectionImg/>
                <SectionText>
                    {section}
                </SectionText>
            </ColSection>
        )
    }

    return (
        <StyledRow>
            {renderSection()}
            <ColDescription md={8}>
                {data.map(({label, date, position, descr}, index) => {
                    return (
                        <div key={index}>
                            <ColLabel>
                                {label}
                            </ColLabel>
                            <ColCompany>{position}</ColCompany> • <ColData>{date}</ColData>
                            <ColText>
                                {descr}
                            </ColText>
                        </div>
                    )
                })}
            </ColDescription>

        </StyledRow>
    )
}

const renderSkillsBlock = (section, data) => {
    const renderSection = () => {
        return (
            <ColSection md={4}>
                <SectionImg/>
                <SectionText>
                    {section}
                </SectionText>
            </ColSection>
        )
    }

    return (
        <StyledRow>
            {renderSection()}

            <ColDescription md={8}>
                {data.map((item, index) => {
                    return (
                        <SkillRow xs={12} md={12} key={index}>
                            <ColLabel skills xs={12} md={1}>
                                {item.name}
                            </ColLabel>
                            <Col xs={12} md={8}>
                                <SkillProgress color="warning" value={item.level}/>
                            </Col>
                        </SkillRow>
                    )
                })}
            </ColDescription>
        </StyledRow>

    )
}


const Resume = ({data}) => {

    const resumeData = data.resume;

    return (
        <StyledContainer fluid id={'#resume'}>
            {renderInfoBlock(resumeData.headers.education, resumeData.education)}
            {renderInfoBlock(resumeData.headers.work, resumeData.work)}
            {renderSkillsBlock(resumeData.headers.skills, resumeData.skills)}
        </StyledContainer>
    )
}
export default Resume;
