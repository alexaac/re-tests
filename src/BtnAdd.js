import React, { Component } from 'react';

class BtnAdd extends Component {
	render() {
    	return (
        	<button disabled={this.props.disabled}>Add</button>
        )
    } 
}

export default BtnAdd;

