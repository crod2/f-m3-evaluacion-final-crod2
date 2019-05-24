import React from 'react';
import './App.css';
import { fetchPotter } from './services/FetchPotter';

class App extends React.Component {
constructor(props) {
  super(props) 

  this.fetchCharacters = this.fetchCharacters.bind(this);
}


fetchCharacters() {
  fetchPotter() 
  .then(data => {
    console.log(data)
  })
}

componentDidMount() {
  this.fetchCharacters();
}

  render() {
    return (
      <div>
        <h1>Harry Potter Characters</h1>
      </div>
    )
  }
}

export default App;
