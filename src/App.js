import React, { Component } from 'react';
import './App.css';
import Game from "./Components/Game";
import Footer from "./Components/Footer"
import cards from "./Components/Game/cards.json";

class App extends Component {
  state = {
        message: "",
        data: cards,
        unClicked: cards,
        score: 0,
        topScore: 0,
        round: 1
    };

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
