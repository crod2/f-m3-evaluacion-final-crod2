import React from 'react';

class CharacterCard extends React.Component {
  render() {
    const { charactersArr, id } = this.props;
    const characterCard = charactersArr[id];

    return (
      <React.Fragment>

        {charactersArr.length > 0 ?
          <div className="card">
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

      </React.Fragment>
    )
  }
}

export default CharacterCard;