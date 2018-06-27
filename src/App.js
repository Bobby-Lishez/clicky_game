import React, { Component } from 'react';
import './App.css';
import Game from "./Components/Game";
import Footer from "./Components/Footer"
import cards from "./Components/Game/cards.json";

class App extends Component {

  render() {
    return (
      <div>
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
