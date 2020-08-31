import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "../pages/resumePage/header";
import About from "../pages/resumePage/about/about";
import Resume from "../pages/resumePage/resume";
import Portfolio from "../pages/resumePage/portfolio";
import Footer from "../pages/resumePage/footer";
import Contact from "../pages/resumePage/contact";
import {Route} from "react-router";
import {Container} from "reactstrap";
import styled from "styled-components";

const Plug = styled(Container)`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: #30d5c8;
font-size: 1.5rem;
height: 20vh;
`

function App() {
    return (
        <>

            <Header/>
            <About/>
            <Resume/>
            {/*<Portfolio/>*/}
            {/*<Contact/>*/}
            {/*<Footer/>*/}
            <Plug fluid>
                ⚠ Site under development ⚠ <br/>
                Wait for updates
                <br/>🧱🧱👷‍♂️ 👷‍♀️🧱🧱
            </Plug>
        </>

    );
}

export default App;
