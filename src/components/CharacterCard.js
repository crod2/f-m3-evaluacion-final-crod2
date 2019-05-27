import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {

  componentWillUnmount() {
    this.props.resetFilters();
  }

  render() {
    const { charactersArr, id, getHouse } = this.props;
    const characterCard = charactersArr[id];

    return (
      <React.Fragment>
        <div className="card">

          {charactersArr.length > 0 ?
            <div className="card__show">
              <div className="card__img" style={{ backgroundImage: `url(${characterCard.image})` }} alt={`Imagen de ${characterCard.name}`}>
              </div>
              <div className="card__details">
                <h2 className="characters__name">{characterCard.name.toUpperCase()}</h2>
                <img className="characters__house" src={getHouse(characterCard.house)} alt={`Image of ${characterCard.name}`}></img>
                <ul className="card__details">
                  <li>{`Date of Birth: ${characterCard.dateOfBirth}`}</li>
                  <li>{`Patronus: ${characterCard.patronus.toUpperCase()}`}</li>
                  {characterCard.alive ?
                    <li>By the end of the saga they are... ALIVE!</li>
                    :
                    <li>By the end of the saga they are... ☠️☠️☠️</li>
                  }
                </ul>
              </div>
            </div>
            :
            ''
          }
        </div>


        <Link to="/">Volver</Link>
      </React.Fragment>
    )

  }
}

export default CharacterCard;