import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import UserList from './UserList.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
    userNames: {}
  };

  handleAddItem = user => {
    const isNotUnique = this.isNotUnique(user.userName);
    
    if (isNotUnique) {
      this.showDuplicateError();
      return;
    }
    
    this.setState(prevState => {
         
      return { 
        users: [...prevState.users, user], 
        userNames: {...prevState.userNames, [user.userName]: 1}
      }
    })
  }

  isNotUnique = (userName) => this.state.userNames[userName] === 1;
  
  showDuplicateError = () => {
  	window.alert('An user with this name already exists')
  }
  
  render() {
    console.log(this.state.items);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Form onAddItem={this.handleAddItem}/>
		<UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
