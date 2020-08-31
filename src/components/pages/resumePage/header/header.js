import React, {useState} from 'react';
import ParticlesBg from "particles-bg";
import {StyledNavContainer, Banner, BannerText, HeaderRow, BannerDescription, BannerButtonContainer} from "./style";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from "@fortawesome/free-regular-svg-icons";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <HeaderRow id='#home'>
                <ParticlesBg num={7} type="circle" bg/>
                <StyledNavContainer>
                    <Navbar color="transparent" light expand="md">
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar horizontal>
                                <NavItem>
                                    <NavLink href="#home">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#about">ABOUT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#resume">RESUME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#portfolio">WORKS</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </StyledNavContainer>

                <Banner>
                    <BannerText>
                        Hello
                    </BannerText>
                    <BannerDescription>
                        I am a beginner web developer ingeneer. This is my resume home page.
                    </BannerDescription>
                    <BannerDescription>Glad to see you 👋</BannerDescription>
                    <BannerButtonContainer>
                        <a href='#' target='_blank'>
                            <Button color='secondary' size="lg">
                                <FontAwesomeIcon icon={faFileCode}/> Source
                            </Button>
                        </a>
                        <a href='https://github.com/hamster726' target='_blank'>
                        <Button color='primary' size="lg">
                            <FontAwesomeIcon icon={faGithub}/> Github
                        </Button>
                        </a>
                    </BannerButtonContainer>
                </Banner>
            </HeaderRow>
        </>
    );
}

export default Header;