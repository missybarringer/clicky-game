import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import cards from "./cards.json";
// sets up the random cards array
function randomCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };
// click handler to see if the element's id has been clicked or not & either increments the score & top score or resets the score to 0
 handleClick = id => {
   if (this.state.clicked.indexOf(id) === -1) {
     this.handleIncrement();
     this.setState({ clicked: this.state.clicked.concat(id) });
   } else {
     this.handleReset();
   }
  };
// Increment handler increments the score & topscore if the element has not been clicked before
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };
// Reset handler resets the score to 0 & retains the topscore & gives the user a message "You guessed incorrectly"
// then call the reshuffle cards function
  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };
// shuffles the cards again
  handleShuffle = () => {
    let shuffledCards = randomCards(cards);
    this.setState({ cards: shuffledCards });
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} correctIncorrect={this.state.correctIncorrect} topScore={this.state.topScore}>Clicky Game</Header>
        <Title>Click on an image to earn points, but don't click on the same one more than once or you will lose the game</Title>
        {this.state.cards.map(card => (
          <Card
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;