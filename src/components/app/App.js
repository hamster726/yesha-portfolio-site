import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './../../db.json'
import Header from "../pages/resumePage/header";
import About from "../pages/resumePage/about/about";
import Resume from "../pages/resumePage/resume";
import Portfolio from "../pages/resumePage/portfolio";
import Contact from "../pages/resumePage/contact";
import {Container} from "reactstrap";
import styled from "styled-components";

const Plug = styled(Container)`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: orange;
font-size: 1.5rem;
height: 20vh;
`

class App extends Component {

    state = {
        lang: 'en'
    }


    ChangeLang = (lang) => {

        if (lang === 'ru') {
            this.setState({
                lang: 'ru'
            })
        } else {
            this.setState({
                lang: 'en'
            })
        }
    }

    render() {

        const {lang} = this.state;

        let translatedData = data;

        switch (lang) {
            case "ru":
                translatedData = data.ru;
                break;
            case "en":
                translatedData = data.en;
                break;
            default:
                translatedData = data.ru;
        }

        return (
            <>

                <Header data={translatedData} ChangeLang={this.ChangeLang}/>
                <About data={translatedData}/>
                <Resume data={translatedData}/>
                <Portfolio data={translatedData}/>
                <Contact data={translatedData}/>
            </>

        );
    }


}

export default App;
