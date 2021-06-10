import './App.scss';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Wallets from './components/Wallets';
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';
import Footer from './components/Footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/crypto-app" exact component={Home} />
          <Route path="/crypto-app/contact" component={Contact} />
          <Route path="/crypto-app/:id" component={CoinDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
