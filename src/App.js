import React from 'react';
import Dictionary from "./Dictionary";
import Footer from "./Footer"
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
        <h1 className ="text-center">
       What are you looking for?🔍
        </h1>
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
    <Footer />
    </div>
  );
}

export default App;
