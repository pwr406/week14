import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import MovieContainer from './components/MovieList'

//main app - added Nav bar component and Movie container that houses the other components. 
function App() {
  return (
    <div className="App">
      <NavBar /> 
      <MovieContainer />

    </div>
  );
}

export default App;
