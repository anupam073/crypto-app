import './Home.scss';
import Hero from './Hero';
import CoinsTable from './CoinsTable';
import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <>
                <Hero />
                <CoinsTable />

            </>
        )
    }
}

export default Home;
