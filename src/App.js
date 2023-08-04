import React, { Component } from 'react';
//import logo from './logo.svg';
import mba from './3.webp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mba} className="App-logo" alt="logo" />


          <h1 className="App-title"><b>Feature com alteração</b></h1>
        </header>
        <p className="App-intro">
          O lado negro da força!!
         </p>
        
        <p> Essa é a nossa branch!!!"</p>


          <h1 className="App-title"><b>Aplicação do Lu!</b></h1>
      </div>
    );
  }
}

export default App;
