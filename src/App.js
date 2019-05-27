import React from 'react';
import './stylesheets/App.scss';
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
  this.resetFilters = this.resetFilters.bind(this);
  this.getLS = this.getLS.bind(this);
  this.getHouse = this.getHouse.bind(this);
}

fetchCharacters() {
  fetchPotter() 
  .then(data => {
      const newCharactersArr = data.map((item, index) => {
        return {...item, id : index}
      })

      localStorage.setItem('potterInfo', JSON.stringify(newCharactersArr));

      this.setState( {charactersArr : newCharactersArr} );
  })
}

getInputValue(event) {
  const search = event.currentTarget.value;

  this.setState( {filteredInfo : search} );
}

getLS() {
  return JSON.parse(localStorage.getItem('potterInfo'));
}

componentDidMount() {
  const savedStorage = this.getLS()
  if(savedStorage) {
    this.setState( {charactersArr : savedStorage} );
  } else {
    this.fetchCharacters(); 
  }
}

resetFilters() {
  this.setState( {filteredInfo : ''} )
}

getHouse(house) {
  if (house === 'Gryffindor') {
    return 'https://vignette.wikia.nocookie.net/es.harrypotter/images/b/b8/Logo_Gryffindor_2.jpg/revision/latest?cb=20160417160851'
  } else if (house === 'Slytherin') {
    return 'https://vignette.wikia.nocookie.net/es.harrypotter/images/d/d0/Logo_Slytherin_2.png/revision/latest?cb=20160417160853'
  } else if (house === 'Hufflepuff') {
    return 'https://vignette.wikia.nocookie.net/es.harrypotter/images/3/30/Logo_Hufflepuff_2.png/revision/latest?cb=20160417160852'
  } else if (house === 'Ravenclaw') {
    return 'https://vignette.wikia.nocookie.net/es.harrypotter/images/3/36/Logo_Ravenclaw_2.png/revision/latest?cb=20160417160853'
  } else {
    return null
  }
}

  render() {
    const { charactersArr, filteredInfo } = this.state;
    return (
      <div className="container">
        <h1 className="container__title">Welcome to the magical world of</h1>
        <img className="container__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"/>
        
        <Switch>
          <Route exact path="/" render={ () => 
            <React.Fragment>
              <Filters filteredInfo={filteredInfo} getInputValue={this.getInputValue} />
              <CharactersList filteredInfo={filteredInfo} charactersArr={charactersArr} />
            </React.Fragment>
          }
          />
        
          <Route path="/charactercard/:id" render={potterProps => (
          <CharacterCard id={potterProps.match.params.id} charactersArr={charactersArr} resetFilters={this.resetFilters} getHouse={this.getHouse} />)}/>

        </Switch>

      </div>
    )
  }
}

export default App;
