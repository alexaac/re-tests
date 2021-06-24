import React, { Component } from 'react';


class BtnDelete extends Component {
	render() {
    	return (
        	<button onClick={this.props.onClick} disabled={this.props.disabled}>
              Delete Last Item
            </button>
        )
    } 
}

export default BtnDelete;