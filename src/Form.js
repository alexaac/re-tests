import React, { Component } from 'react';
import BtnAdd from './BtnAdd.js';

class Form extends Component {
	
 render() {
   return (
		<form onSubmit={this.props.onSubmit}>
  			<input
  				type="text"
                placeholder="Enter New Item"
                value={this.props.value}
                onChange={this.props.onChange}
            />
        <BtnAdd disabled={this.props.disabled} />
		</form>
   )
 }
}

export default Form;