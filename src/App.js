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
    return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf'
  } else if (house === 'Slytherin') {
    return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK'
  } else if (house === 'Hufflepuff') {
    return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej'
  } else if (house === 'Ravenclaw') {
    return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq'
  } else {
    return null;
  }
}

  render() {
    const { charactersArr, filteredInfo } = this.state;
    return (
      <div className="container">
        <h1 className="container__title">Welcome to the Wizarding World of Harry Potter</h1>
        <img className="container__img" src="https://www.sclance.com/pngs/harry-potter-logo-png/harry_potter_logo_png_644093.png"/>
        
        <Switch>
          <Route exact path="/" render={ () => 
            <React.Fragment>
              <Filters filteredInfo={filteredInfo} getInputValue={this.getInputValue} />
              <CharactersList filteredInfo={filteredInfo} charactersArr={charactersArr} getHouse={this.getHouse} />
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
