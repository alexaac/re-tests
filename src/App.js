import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList.js';
import Form from './Form.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    value: '',
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };

  handleAddItem = (message) => {
    this.setState(prevState => ( 
      { 
        messages: [...prevState.messages, message],
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>
            <MessageList messages={this.state.messages} user={users[0]}/>
          	<Form onAddItem={this.handleAddItem} username={users[0].username}/>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
			<MessageList messages={this.state.messages} user={users[1]}/>
            <Form onAddItem={this.handleAddItem} username={users[1].username}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
