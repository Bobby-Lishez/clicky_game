import React, { Component } from 'react';
import  ClickItem  from "../ClickItem";
import {Container, Row, Col} from "../Container";
import Header from "../Header";
import Nav from "../Nav";
import cards from './cards.json';
import './Game.css';


class Game extends Component {
    state = {
        message: "Welcome. Click any square to begin.",
        data: cards,
        unClicked: cards,
        score: 0,
        topScore: 0,
        round: 1
    };

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    handleClick = (id) => {
        const findCard = this.state.unClicked.find(item => item.id === id);

        if(findCard === undefined) {
            const newTopScore = this.state.score + (12 * (this.state.round - 1));
            this.setState({ 
                message: "You chose... poorly",
                topScore: (newTopScore > this.state.topScore) ? newTopScore : this.state.topScore,
                score: 0,
                data: cards,
                unClicked: cards,
                round: 1
            });
        }
        else {
            const newCards = this.state.unClicked.filter(item => item.id !== id);
            const newScore = this.state.score + 1;
            const newTopScore = this.state.topScore + 12;
            console.log(newTopScore);
            if (newScore%12 === 0){
                this.setState({
                    message: 'Congratulations! You completed a round!',
                    score: 0,
                    data: cards,
                    unClicked: cards,
                    round: this.state.round + 1,
                    topScore: newTopScore
                })
            } else{
            
            this.setState({ 
                message: "Keep going",
                score: newScore,
                data: cards,
                unClicked: newCards
            });
            this.shuffleArray(cards);
        }
        }

        
    }

    render() {
        return (
            <div>
            <Nav 
                message = {this.state.message}
                round = {this.state.round}
                score = {this.state.score}
                topScore = {this.state.topScore}
            />
            <Header />
            <Container fluid>
            <Row>
                {this.state.data.map(card => {
                    let cardId = "item-" + (card.id + 1);
                    return (
                    <Col size = "md-3 sm-6" key = {card.id}>
                    <ClickItem
                        key = {card.id}
                        indexNumber = {card.id}
                        id = {cardId}
                        handleClick = {this.handleClick}
                    >
                        Click me!
                    </ClickItem>
                    </Col>
                    )
                })}
                </Row>
            </Container>
            </div>
        )
    }
}

export default Game;