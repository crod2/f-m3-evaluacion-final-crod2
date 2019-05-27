import React from 'react';
import { Link } from 'react-router-dom';

class CharactersList extends React.Component {
  render() {

    const {filteredInfo, charactersArr, getHouse} = this.props;

    return (
      <React.Fragment>
        <ul className="container__list">
          {charactersArr
          .filter(item => item.name.toLowerCase().includes(filteredInfo.toLowerCase()))
          .map(item => 
          <li className="list__characters" key={item.id}>
          <Link to={`/charactercard/${item.id}`} className="list__link">
            <img className="list__img" src={item.image} alt={`Imagen de ${item.name}`}></img>
            <div className="container__info">
              <h2 className="list__name">{item.name}</h2>
              <img className="list__house" src={getHouse(item.house)} alt={item.house}></img>
            </div>
          </Link>
          </li>
          )}
        </ul>
      </React.Fragment>
    ) 
  }
}

export default CharactersList;