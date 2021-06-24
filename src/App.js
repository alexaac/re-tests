import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form.js';
import Items from './Items';
import BtnDelete from './BtnDelete.js';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <Header src={logo} />
        <h2>Shopping List</h2>
        <Form value={this.state.value}
			onSubmit={this.addItem}
			onChange={this.handleChange}
			disabled={this.inputIsEmpty()}
		/>

        <BtnDelete onClick={this.deleteLastItem} disabled={this.noItemsFound()} />

        <p className="items">Items</p>
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
