import React from 'react';
import './App.css';
import { fetchPotter } from './services/FetchPotter';
import { Route, Switch } from 'react-router-dom';
import Filters from './components/Filters';
import CharactersList from './components/CharactersList';
import CharacterCard from './components/CharacterCard';

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
        
        <Switch>
          <Route exact path="/" render={ () => 
            <React.Fragment>
              <Filters filteredInfo={filteredInfo} getInputValue={this.getInputValue} />
              <CharactersList filteredInfo={filteredInfo} charactersArr={charactersArr} />
            </React.Fragment>
          }
          />
        
          <Route path="/charactercard/:id" render={potterProps => (
          <CharacterCard id={potterProps.match.params.id} charactersArr={charactersArr}/>)}/>

        </Switch>

      </div>
    )
  }
}

export default App;
