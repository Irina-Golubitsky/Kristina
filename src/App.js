import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <About />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
