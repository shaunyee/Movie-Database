import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Movie from './Movie';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
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
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="/test" component={Test} />
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => (
  <h1>TEST</h1>
);
