import React, { Component } from 'react';
import Movie from './Movie'
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Infinity Wars'
  },
  {
    id: 3,
    title: 'Spider Man'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
