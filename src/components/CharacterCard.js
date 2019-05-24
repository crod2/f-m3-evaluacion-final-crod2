import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {

  componentWillUnmount() {
    this.props.resetFilters();
  }

  render() {
    const { charactersArr, id } = this.props;
    const characterCard = charactersArr[id];

    return (
      <React.Fragment>
        <div className="card">

          {charactersArr.length > 0 ?
            <div className="card__show">
              <div className="card__img" style={{ backgroundImage: `url(${characterCard.image})` }} alt={`Imagen de ${characterCard.name}`}>
              </div>
              <div className="card__details">
                <h2>{characterCard.name}</h2>
                <ul className="card__details">
                  <li>{characterCard.house}</li>
                  <li>{characterCard.dateOfBirth}</li>
                  <li>{characterCard.patronus}</li>
                  {characterCard.alive ?
                    <li>Estado: VIVO</li>
                    :
                    <li>Estado: MUERTO</li>
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