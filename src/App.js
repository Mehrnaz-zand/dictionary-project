import React from 'react';
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
        <h1 className ="text-center">
        Dictionary App
        </h1>
      </header>
      <main>
        <Dictionary defaultWord="sun" />
      </main>
    </div>
    <footer className="App-footer">
      <small>
      This project is coded by {" "}
      <a href ="https://www.linkedin.com/in/mehrnaz-zand" target="_blank"
      rel="noreferrer">
        Mehrnaz Zand{" "}</a> and is {" "}
      <a href="https://github.com/Mehrnaz-zand/dictionary-project" 
      target="_blank" rel="noreferrer">
        open-sourced on GitHub
        </a> 
        {" "} and hosted on {" "}
       <a href ="https://peaceful-northcutt-dfe9be.netlify.app/" 
       target="_blank" rel="noreferrer">Netlify</a>
      </small>
    </footer>
    </div>
  );
}

export default App;
