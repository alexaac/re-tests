import React, { Component } from 'react';
import MovieInfo from './MovieInfo';

class moviesInfoList extends Component {
  render() {
    const { profiles, users, movies } = this.props;

    const usersByMovie = profiles.reduce((hash, elem) => {
      hash[elem.favoriteMovieID] = {
        id: elem.id,
        userNames: profiles
          .filter((profile) => profile.favoriteMovieID === elem.favoriteMovieID)
          .map((profile) => users[profile.userID].name),
      };
      return hash;
    }, {});

    const moviesInfo = Object.keys(movies).map((id) => (
      <MovieInfo
        key={id}
        userNames={(usersByMovie[id] && usersByMovie[id].userNames) || []}
        movieInfo={movies[id]}
      />
    ));

    return <ul>{moviesInfo}</ul>;
  }
}

export default moviesInfoList;
