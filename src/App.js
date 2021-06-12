import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Footer from './components/Footer/Footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (
    <Router basename={'/crypto-app'}>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/:id" component={CoinDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
