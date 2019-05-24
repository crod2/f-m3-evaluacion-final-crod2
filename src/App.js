import React from 'react';
import './App.css';
import { fetchPotter } from './services/FetchPotter';
import Filters from './components/Filters';

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
        <Filters charactersArr={charactersArr} filteredInfo={filteredInfo} getInputValue={this.getInputValue} />
      </div>
    )
  }
}

export default App;
