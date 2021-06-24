import React, { Component } from 'react';

class Header extends Component {
	render() {
    	return (
        	<header className="App-header">
              <img src={this.props.src} className="App-logo" alt="logo" />
              <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
        )
    }
}

export default Header;