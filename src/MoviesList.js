import React, { Component } from 'react';
import Movie from './Movie';


class MoviesList extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);

      const movies = await res.json();
      console.log(movies)
      this.setState({
        movies: movies.results
      })

    }catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MoviesList;
