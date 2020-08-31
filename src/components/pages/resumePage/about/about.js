import React from "react";
import {StyledContainer, Avatar, Description, StyledCol, DescriptionH3, ButtonResume, StyledRow} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Resume from './resume-2.pdf'

import avatarImg from './avatar.jpg';

const About = () => {
    return (
        <StyledContainer fluid id={'#about'}>
            <StyledRow xs={1} md={2}>
                <StyledCol>
                    <Avatar src={avatarImg}/>
                </StyledCol>
                <StyledCol>
                    <DescriptionH3>
                        About me
                    </DescriptionH3>
                    <Description>
                        Это тестовое описание о том, что программист все дела, хотел бы рассказать насколько
                        я крут, но я еще не придумал текст. Вот.
                    </Description>
                    <DescriptionH3>
                        Contact
                    </DescriptionH3>
                    <Description>
                        А здесь я решил сделать второй абзац, ну мол могу же. Вот теперь тут есть второй абзац :)
                    </Description>
                    <a download href={Resume}>
                        <ButtonResume color='primary'>
                            <FontAwesomeIcon icon={faDownload}/> Download Resume
                        </ButtonResume>
                    </a>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default About;
