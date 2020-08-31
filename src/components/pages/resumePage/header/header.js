import React, {useState} from 'react';
import ParticlesBg from "particles-bg";
import {StyledNavContainer, Banner, BannerText, HeaderRow, BannerDescription, BannerButtonContainer} from "./style";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from "@fortawesome/free-regular-svg-icons";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
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

    const NavItemScroll = (name) => {
        return (
            <NavItem>
                <ScrollLink activeClass="active"
                            to={'#' + name.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}>
                    <NavLink>{name}</NavLink>
                </ScrollLink>
            </NavItem>
        )
    }

    return (
        <>
            <HeaderRow id={'#home'}>
                <ParticlesBg num={7} type="circle" bg/>
                <StyledNavContainer>
                    <Navbar color="transparent" light expand="md" fixed>
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar horizontal>
                                    {NavItemScroll('HOME')}
                                    {NavItemScroll('ABOUT')}
                                    {NavItemScroll('RESUME')}
                                    {NavItemScroll('CONTACT')}
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
                        <a href='https://github.com/hamster726/yesha-portfolio-site' target='_blank'>
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
