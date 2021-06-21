import React, { Component } from 'react';

class MovieInfo extends Component {
  render() {
    const { userNames, movieInfo } = this.props;

    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>

        {userNames.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {userNames.map((userName) => {
              return (
                <li key={userName}>
                  <p>{userName}</p>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }
}

export default MovieInfo;
