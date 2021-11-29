import React from 'react';
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
        <h1>
        Dictionary App
        </h1>
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
    <footer className="App-footer">
      <small>
      Coded by Mehrnaz Zand
      </small>
    </footer>
    </div>
  );
}

export default App;
