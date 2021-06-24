import React, { Component } from 'react';


class User extends Component {

  state = {
  	hideGames: 'Hide the Number of Games Played',
    games: this.props.user.games
  };
  
  toggleGames = () => {
    let hideGames, games;
    
  	if (this.state.hideGames === 'Hide the Number of Games Played') {
      	hideGames = 'Show the Number of Games Played';
      	games = '*';
    } else {
      	hideGames = 'Hide the Number of Games Played';
      	games = this.props.user.games;
    }

    this.setState( previousState => (
      { 
        hideGames: hideGames,
        games: games
      }
    )) 
  }
  
  render() {
  	return (
      <div class="user">
          <p key="{props.key}">
              {this.props.user.userName} played {this.state.games} games.
          </p>
          <button onClick={this.toggleGames}>{this.state.hideGames}</button>
      </div>
    )
  }
}

export default User;