import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

import Game from './components/Game';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
