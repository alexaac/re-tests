import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SumGame from './SumGame';

class App extends Component {
  state = {
  	value1: Math.floor(Math.random() * 100),
  	value2: Math.floor(Math.random() * 100),
  	value3: Math.floor(Math.random() * 100),
    proposedAnswer: 0,
  	numQuestions: 0,
  	numCorrect: 0,
  };
  
  calculateProposedAnswer = () => {
    this.setState((currentState) => ({
      proposedAnswer: Math.floor(Math.random() * 3) + currentState.value1 + currentState.value2 + currentState.value3
    }))
  }
  
  incrementNumberOfCorrect = () => {
  	this.setState((currentState) => ({
    	numCorrect: currentState.numCorrect + 1,
    }));
  }
  
  incrementNumberOfQuestions = () => {
    this.setState((currentState) => ({
    	numQuestions: currentState.numQuestions + 1,
    }));
  }

  sum = () => {
  	return this.state.value1 + this.state.value2 + this.state.value3; 
  }

  getAnswer = (flag) => {
  	this.incrementNumberOfQuestions();
    const proposedAnswer = this.state.proposedAnswer;
    const sum = this.sum();
    
  	if ((sum === proposedAnswer && flag) || (sum !== proposedAnswer && !flag)) {
      this.incrementNumberOfCorrect();    
    }
  }
  
  setTrue = () => {
    this.calculateProposedAnswer();
  	this.getAnswer(true);
  }
  
  setFalse = () => {
    this.calculateProposedAnswer();
  	this.getAnswer(false);
  }
  
  componentDidMount() {
    this.calculateProposedAnswer();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <SumGame 
          value1={this.state.value1}
          value2={this.state.value2}
          value3={this.state.value3}
          proposedAnswer={this.state.proposedAnswer}
          numQuestions={this.state.numQuestions}
          numCorrect={this.state.numCorrect}
		  onSetTrue={this.setTrue}
		  onSetFalse={this.setFalse}
        />
      </div>
    );
  }
}

export default App;
