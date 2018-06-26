import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Game from "./Components/Game";
import Footer from "./Components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
