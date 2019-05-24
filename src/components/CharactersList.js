import React from 'react';
import { Link } from 'react-router-dom';

class CharactersList extends React.Component {
  render() {

    const {filteredInfo, charactersArr} = this.props;

    return (
      <React.Fragment>
        <ul className="container__list">
          {charactersArr
          .filter(item => item.name.toLowerCase().includes(filteredInfo.toLowerCase()))
          .map(item => 
          <li className="list__characters" key={item.id}>
          <Link to={`/charactercard/${item.id}`} className="characters__link">
            <img className="characters__img" src={item.image} alt={`Imagen de ${item.name}`}></img>
            <h2 className="characters__name">{item.name}</h2>
            <h3 className="characters__house">{item.house}</h3>
          </Link>
          </li>
          )}
        </ul>
      </React.Fragment>
    ) 
  }
}

export default CharactersList;