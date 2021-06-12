import './Home.scss';
import Hero from '../Hero/Hero';
import Footer from '../../components/Footer/Footer';
import CoinsTable from '../CoinsTable/CoinsTable';
import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <>
                <Hero />
                <CoinsTable />
                <Footer />
            </>
        )
    }
}

export default Home;
