import React, { Component } from 'react';
import  ClickItem  from "../ClickItem";
import {Row, Col, Container} from "../Container";
import cards from './cards.json';
import './Game.css';

class Game extends Component {
    state = {
        data: cards,
        score: 0,
        topScore: 0
    };

    shuffleCards = () => {
        alert("shuffling...");
    }

    handleClick = (card) => {
        if (card.clicked) {
            alert("you lose");
        } else{
            card.clicked = true;
            this.shuffleCards();
        }
    }

    render() {
        return (
            <Container fluid>
                {this.state.data.map(card => {
                    const cardId = "item-" + card.id;
                    return (
                    <ClickItem
                        key = {card.id}
                        id = {cardId}
                        clicked = {false}
                    >
                        {card.id}
                    </ClickItem>
                    )
                })}
            </Container>
        )
    }
}

export default Game;