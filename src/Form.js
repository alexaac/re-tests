import React, { Component } from 'react';

class Form extends Component {
  
    state = {
      firstName: '',
      lastName: '',
      userName: '',
      games: 0,
    };
  
	handleChange = event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      this.setState({ [name]: value });
    };

    addItem = event => {
      event.preventDefault();
      this.props.onAddItem(
        {
          firstName: this.state.firstName, 
          lastName: this.state.lastName,
          userName: this.state.userName,
          games: 0,
        }
      );
    };

    inputIsEmpty = () => {
      return this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '';
    };

	render() {
  		return (
        	<form className="game-form" onSubmit={this.addItem}>
          		<label htmlFor="firstName">
                  First Name:
                  <input
                    name="firstName" type="string"
					placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange} />
              	</label>
                <label htmlFor="lastName">
                  Last Name:
                  <input
                    name="lastName" type="string"
					placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange} />
                </label>
                <label htmlFor="userName">
                  User Name:
                  <input
                    name="userName" type="string"
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.handleChange} />
                  </label>
          		<button disabled={this.inputIsEmpty()}>Add</button>
          	</form>
        )
    }
}

export default Form;