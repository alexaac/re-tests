import React, { Component } from 'react';

class ListProfiles extends Component {
  render() {
  	return (
      <ol>
      	{ this.props.profiles.map((profile) => (
    		<li key={profile.id} >
      			{ `${this.props.users[profile.userID].name}'s favorite movie is ${ this.props.movies[profile.favoriteMovieID].name }` }
      		</li>
    	))}
      </ol>
    )
  }
}

export default ListProfiles;