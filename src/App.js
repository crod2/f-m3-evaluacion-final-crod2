import React from 'react';
import './App.css';
import { fetchPotter } from './services/FetchPotter';

class App extends React.Component {
constructor(props) {
  super(props) 

  this.state = {
    charactersArr: [],
    filteredInfo : ''
  }

  this.fetchCharacters = this.fetchCharacters.bind(this);
  this.getInputValue = this.getInputValue.bind(this);
}

fetchCharacters() {
  fetchPotter() 
  .then(data => {
      const newCharactersArr = data.map((item, index) => {
        return {...item, id : index}
      })
      
      this.setState( {charactersArr : newCharactersArr} );
  })
}

getInputValue(event) {
  const search = event.currentTarget.value;

  this.setState( {filteredInfo : search} );
}

componentDidMount() {
  this.fetchCharacters();
}

  render() {
    const { charactersArr, filteredInfo } = this.state;
    return (
      <div className="container">
        <h1 className="container__title">Harry Potter Characters</h1>
        <label htmlFor="input-info" className="container__laber"></label>
        <input type="text" id="input-info" className="container__input" value={filteredInfo} onChange={this.getInputValue}/>
        <ul className="container__list">
          {charactersArr
          .filter(item => item.name.toLowerCase().includes(filteredInfo))
          .map(item => 
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
