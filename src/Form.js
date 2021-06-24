import React, { Component } from 'react';


class Form extends Component {
  
  	state = {
    	value: ''
    }

    /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    isDisabled = () => this.state.value === '';

    handleChange = event => {
      this.setState({ value: event.target.value });
    };

	addItem = event => {
      event.preventDefault();
      this.props.onAddItem(
         { 
            text: this.state.value,
            username: this.props.username,
         }
      	
      );
    };
  
	render()  {
    	return (
			<div>
              <form className="input-group" onSubmit={this.addItem}>
                <input type="text" 
					className="form-control" 
					placeholder="Enter your message..."
					value={this.state.value}
					onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default Form;