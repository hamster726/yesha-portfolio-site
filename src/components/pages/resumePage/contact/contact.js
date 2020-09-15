import React, {Component} from "react";
import {StyledContainer, Description, EmailIconContainer, StyledRow, IconsCol, StyledLink} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faGithub, faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Col} from "reactstrap";


class Contact extends Component{

    render() {

        const data = this.props.data.contact;

        return (
            <StyledContainer fluid id='#contact'>
                <StyledRow xs={2} md={2}>
                    <Col xs={12} md={1}>
                        <EmailIconContainer>
                            <StyledLink href={`mailto:${data.email}`}><FontAwesomeIcon icon={faEnvelope}/></StyledLink>
                        </EmailIconContainer>
                    </Col>
                    <Col xs={12} md={11}>
                        <Description>
                            {data.description}
                            <br/>
                            <br/>
                            Email:
                            <br/>
                            <StyledLink href={`mailto:${data.email}`}>yevhen.shaparenko@gmail.com</StyledLink>
                        </Description>

                    </Col>
                </StyledRow>
                <StyledRow>
                    <IconsCol><StyledLink href='https://www.facebook.com/yevhen.shaparenko' target='_blank'><FontAwesomeIcon icon={faFacebook}/></StyledLink></IconsCol>
                    <IconsCol><StyledLink href='https://www.instagram.com/hamster726/ ' target='_blank'><FontAwesomeIcon icon={faInstagram}/></StyledLink></IconsCol>
                    <IconsCol><StyledLink href='https://github.com/hamster726' target='_blank'><FontAwesomeIcon icon={faGithub}/></StyledLink></IconsCol>
                    <IconsCol><StyledLink href='https://www.linkedin.com/in/yevhen-shaparenko-a369aa109/' target='_blank'><FontAwesomeIcon icon={faLinkedin}/></StyledLink></IconsCol>
                </StyledRow>


            </StyledContainer>
        )
    }


}
export default Contact;