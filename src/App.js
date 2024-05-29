import React, { Component } from 'react';
//import logo from './logo.svg';

import mba from './MBA.png';
//import mba from './3.webp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />

          <h1 className="App-title"> Welcome to MBA Impacta</h1>


          <p className="App-intro">
            Teste Fernando
           </p>
      


        </header>
      </div>
    );
  }
}

export default App;
