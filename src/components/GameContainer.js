import React, { Component } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Dogs from "../images.json";

class Game extends Component {
  state = {
    text: "Click an image to being!",
    topScore: 0,
    score: 0,
    clicked: [],
    Dogs
  };

  componentDidMount() {
    // this.createImgUrl();
  }
  //Handle Click
  handleClick = id => {
    // Get the data-value of the clicked card
    console.log(id);

    if (this.state.clicked.indexOf(id) > -1) {
      // Shuffle cards
      this.setState({
        text: "You guess incorrectly, click another image to restart"
      });
      this.setState({ topScore: this.state.score });
      this.setState({ score: 0 });
      this.setState({ clicked: [] });

      console.log("here");
    } else {
      this.setState({ text: "Woof! Woof! You guessed correctly" });
      this.shuffleArray(this.state.Dogs);
      this.setState({ score: this.state.score + 1 });
      this.setState(prevState => ({ clicked: [...this.state.clicked, id] }));
    }
  };

  // Randomize Array
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  render() {
    return (
      <div>
        <Navbar
          text={this.state.text}
          score={this.state.score}
          topScore={this.state.topScore}
        />{" "}
        <div className="container">
          <div className="card-columns">
            {this.state.Dogs.map((dog, i) => {
              return (
                <Card
                  imageUrl={dog.url}
                  id={dog.id}
                  key={dog.name}
                  click={this.handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
