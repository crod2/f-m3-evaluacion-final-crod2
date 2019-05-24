import React from 'react';
import { Link } from 'react-router-dom';

class CharactersList extends React.Component {
  render() {

    const {filteredInfo, charactersArr} = this.props;

    return (
      <React.Fragment>
        <ul className="container__list">
          {charactersArr
          .filter(item => item.name.toLowerCase().includes(filteredInfo))
          .map(item => 
          <li className="list__characters" key={item.id}>
          <Link to={`/charactercard/${item.id}`}><h2>{item.name}</h2></Link>
          <img src={item.image} alt={`Imagen de ${item.name}`}></img>
          <h3>{item.house}</h3>
          </li>
          )}
        </ul>
      </React.Fragment>
    ) 
  }
}

export default CharactersList;