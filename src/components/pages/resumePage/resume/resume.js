import React from "react";
import {
    StyledRow,
    StyledContainer,
    ColSection,
    ColDescription,
    ColLabel,
    ColCompany,
    ColData,
    ColText,
    SkillProgress
} from "./style";


const renderInfoBlock = (section, data) => {

    const renderSection = () => {
        return (
            <ColSection>
                {section}
            </ColSection>
        )
    }

    return (
        <StyledRow xs={1} md={2} xl={2}>
            {renderSection()}
            <ColDescription>
                {data.map(({label, date, position, descr}) => {
                    return (
                        <>
                            <ColLabel>
                                {label}
                            </ColLabel>
                            <ColCompany>{position}</ColCompany> • <ColData>{date}</ColData>
                            <ColText>
                                {descr}
                            </ColText>
                        </>
                    )
                })}
            </ColDescription>

        </StyledRow>
    )
}

const renderSkillsBlock = (section, data) => {
    const renderSection = () => {
        return (
            <ColSection>
                {section}
            </ColSection>
        )
    }

    return (
        <StyledRow xs={1} md={2} xl={2}>
            {renderSection()}
            <ColDescription>
                {data.map((item) => {
                    return (
                        <>
                            <ColLabel>
                                {item.name}
                            </ColLabel>
                            <SkillProgress color="warning" value={item.level}/>
                        </>
                    )
                })}
            </ColDescription>
        </StyledRow>

    )
}

const data = {
    resume: {
        education: [
            {
                label: "Igor Sikorsky Kyiv Polytechnic Institute\n",
                position: "Bachelour degree",
                date: "Learn 2013-2017",
                descr: "I learned in KPI!11!"
            },
            {
                label: "The Complete JavaScript + React Course - From Scratch to Results",
                position: "FrontEnd Developer",
                date: "February 2020 - August 2020",
                descr: "Good course, you know :)"
            }
        ],
        work: [
            {
                label: 'Microlab™',
                position: 'IT Support',
                date: 'February 2018 - now',
                descr: 'Now im working in Microlab. Supporting sites and CMS Bitrix-1C system',
            },
        ],
        skills: [
            {
                name: 'JavaScript ES6+',
                level: '55'
            },
            {
                name: 'React',
                level: '55'
            },
            {
                name: 'Redux',
                level: '55'
            },
            {
                name: 'React-router',
                level: '65'
            },
            {
                name: 'HTML \\ CSS',
                level: '65'
            },
            {
                name: 'Webpack \\ npm',
                level: '40'
            },
            {
                name: 'Git',
                level: '60'
            },
            {
                name: 'styled-components',
                level: '80'
            },
            {
                name: 'REST api',
                level: '60'
            },
            {
                name: 'firebase',
                level: '25'
            }
        ]
    },

}

const Resume = () => {

    return (
        <StyledContainer fluid id={'#resume'}>
            {renderInfoBlock('Education', data.resume.education)}
            {renderInfoBlock('Work', data.resume.work)}
            {renderSkillsBlock('Skills', data.resume.skills)}
        </StyledContainer>
    )
}
export default Resume;
