import React from 'react';
import {Hashrouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Router exact path="/" component={Header}/>
        <Router path="footer" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
