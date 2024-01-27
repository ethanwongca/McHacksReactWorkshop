import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <h1>Intro to React ft. Ethan and Jake</h1>
        <h2>God, what a <s>s*xy</s> nice looking website</h2>
      </div>
    </div>
  );
}

export default App;