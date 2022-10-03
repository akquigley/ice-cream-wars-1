import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { AdDesign } from './components/AdDesigner'
import { Votes } from './components/Votes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="bottom">
        <AdDesign></AdDesign>
        <Votes></Votes>
      </div>
    </div>
  );
}

export default App;
