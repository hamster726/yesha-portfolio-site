import React, {Component, useState} from 'react';
import ParticlesBg from "particles-bg";
import {
    StyledNavContainer,
    Banner,
    BannerText,
    HeaderRow,
    BannerDescription,
    BannerButtonContainer,
    StyledLink,
    IconsCol,
    StyledNavbar,
    StyledNavItem,
    LangSwitcher
} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {Link as ScrollLink} from "react-scroll";
import {
    Collapse,
    NavbarToggler,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


class Header extends Component {


    state = {
        isOpen: false
    }

    NavItemScroll = (tag, name) => {
        return (
            <StyledNavItem>
                <ScrollLink activeClass="active"
                            to={'#' + tag.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}>
                    <NavLink>{name.toUpperCase()}</NavLink>
                </ScrollLink>
            </StyledNavItem>
        )
    }

    ToggleNav = () => {
        const {isOpen} = this.state;

        this.setState({isOpen: !isOpen})
    }


    render() {

        const data = this.props.data.header;
        const {isOpen} = this.state;


        return (
            <>
                <HeaderRow id={'#home'}>
                    <ParticlesBg color='#FBB124' num={7} type="circle" bg/>
                    <StyledNavContainer>
                        <StyledNavbar light expand="md" fixed>
                            <NavbarToggler onClick={this.ToggleNav}/>
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar horizontal>
                                    {this.NavItemScroll('HOME', data.navbar.home)}
                                    {this.NavItemScroll('ABOUT', data.navbar.about)}
                                    {this.NavItemScroll('RESUME', data.navbar.resume)}
                                    {this.NavItemScroll('PORTFOLIO', data.navbar.portfolio)}
                                    {this.NavItemScroll('CONTACT', data.navbar.contact)}
                                </Nav>
                            </Collapse>
                        </StyledNavbar>

                            <LangSwitcher light>
                                    <UncontrolledDropdown>
                                        <DropdownToggle color={'transparent'}>
                                            <FontAwesomeIcon icon={faGlobeAmericas}/>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem onClick={() => this.props.ChangeLang('ru')}>
                                                Russian
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={() => this.props.ChangeLang('en')}>
                                                English
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                            </LangSwitcher>
                    </StyledNavContainer>

                    <Banner>
                        <BannerText>
                            {data.banner.bannerDescr}
                        </BannerText>
                        <BannerDescription>
                            {data.banner.bannerText}
                        </BannerDescription>
                        <BannerDescription>
                            {data.banner.bannerHello}
                        </BannerDescription>
                        <BannerButtonContainer>
                            <IconsCol><StyledLink href='https://www.facebook.com/yevhen.shaparenko'
                                                  target='_blank'><FontAwesomeIcon
                                icon={faFacebook}/></StyledLink></IconsCol>
                            <IconsCol><StyledLink href='https://www.instagram.com/hamster726/ '
                                                  target='_blank'><FontAwesomeIcon
                                icon={faInstagram}/></StyledLink></IconsCol>
                            <IconsCol><StyledLink href='https://github.com/hamster726' target='_blank'><FontAwesomeIcon
                                icon={faGithub}/></StyledLink></IconsCol>
                            <IconsCol><StyledLink href='https://www.linkedin.com/in/yevhen-shaparenko-a369aa109/'
                                                  target='_blank'><FontAwesomeIcon
                                icon={faLinkedin}/></StyledLink></IconsCol>
                        </BannerButtonContainer>
                    </Banner>
                </HeaderRow>
            </>
        );
    }

}

export default Header;
