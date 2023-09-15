import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import MovieContainer from './components/MovieList'


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <MovieContainer />

    </div>
  );
}

export default App;
