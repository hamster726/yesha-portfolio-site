import React, {Component} from "react";
import {
    StyledContainer,
    Avatar,
    Description,
    StyledCol,
    DescriptionH3,
    ButtonResume,
    StyledRow,
    StyledLink
} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import ResumeEng from './Yevhen-Shaparenko-resume-eng.pdf'
import ResumeRus from './Yevhen-Shaparenko-resume-rus.pdf'

import avatarImg from './avatar.jpg';

class About extends Component {
    render() {
        const data = this.props.data.about;
        const resumeLink = this.props.lang === 'ru' ? ResumeRus : ResumeEng;


        return (
            <StyledContainer fluid id={'#about'}>
                <StyledRow xs={1} md={2}>
                    <StyledCol md={4}>
                        <Avatar src={avatarImg}/>
                    </StyledCol>
                    <StyledCol md={12}>
                        <DescriptionH3>
                            {data.aboutHeading}
                        </DescriptionH3>
                        <Description>
                            {data.aboutText}
                        </Description>
                        <DescriptionH3>
                            {data.contactHeading}
                        </DescriptionH3>
                        <Description>
                            <p>


                                <StyledLink href={`https://goo.gl/maps/JTq4FFFa9YzEDRrK7`}
                                            target='_blank'>
                                    {data.contactText}
                                </StyledLink>
                            </p>
                            <p>
                                <StyledLink href={`mailto:${data.email}`}
                                            target='_blank'>
                                    {data.email}
                                </StyledLink>
                            </p>
                            <p>
                                <StyledLink href={`tel:${data.phone}`}
                                            target='_blank'>
                                    {data.phone}
                                </StyledLink>
                            </p>
                        </Description>
                        <a href={resumeLink} target='_blank' rel="noopener noreferrer">
                            <ButtonResume color='warning' size='lg'>
                                <FontAwesomeIcon icon={faDownload}/> {data.downloadResume}
                            </ButtonResume>
                        </a>
                    </StyledCol>
                </StyledRow>
            </StyledContainer>
        )
    }


}

export default About;
