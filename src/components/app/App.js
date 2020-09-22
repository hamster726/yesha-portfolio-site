import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../pages/resumePage/header";
import About from "../pages/resumePage/about/about";
import Resume from "../pages/resumePage/resume";
import Portfolio from "../pages/resumePage/portfolio";
import Contact from "../pages/resumePage/contact";
import PortfolioService from "../../services/portfolio-service";
import Spinner from "../spinner";


class App extends Component {

    portfolioService = new PortfolioService();

    state = {
        lang: null,
        data: null,
        loading: true,
        loadingLang: false
    }


    componentDidMount() {
        this.ChangeLang('en');
    }


    ChangeLang = (lang) => {

        if (this.state.lang === lang) return;

        if (lang === 'ru') {
            this.portfolioService.getRussianLang()
                .then(res => {
                    this.setState({
                        lang: lang,
                        data: res,
                        loading: false
                    })
                })


        } else {
            this.portfolioService.getEnglishLang()
                .then(res => {
                    this.setState({
                        lang: lang,
                        data: res,
                        loading: false

                    })
                })
        }
    }

    render() {

        const {data} = this.state;

        if (this.state.loading) return (<Spinner/>);

        return (
            <>

                <Header data={data} ChangeLang={this.ChangeLang}/>
                <About data={data}/>
                <Resume data={data}/>
                <Portfolio data={data}/>
                <Contact data={data}/>
            </>

        );
    }


}

export default App;
