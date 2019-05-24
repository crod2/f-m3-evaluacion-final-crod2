import React from 'react';
import './App.css';
import { fetchPotter } from './services/FetchPotter';

class App extends React.Component {
constructor(props) {
  super(props) 

  this.state = {
    charactersArr: []
  }

  this.fetchCharacters = this.fetchCharacters.bind(this);
}


fetchCharacters() {
  fetchPotter() 
  .then(data => {
      const newCharactersArr = data.map((item, index) => {
        return {...item, id : index}
      })
      
      this.setState( {charactersArr : newCharactersArr} )
  })
}

componentDidMount() {
  this.fetchCharacters();
}

  render() {
    const { charactersArr } = this.state;
    return (
      <div className="container">
        <h1 className="container__title">Harry Potter Characters</h1>
        <ul className="container__list">
          {charactersArr.map((item, index) => 
          <li className="list__characters" key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={`Imagen de ${item.name}`}></img>
          <h3>{item.house}</h3>
          </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
