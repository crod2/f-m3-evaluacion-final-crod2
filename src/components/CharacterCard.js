import React from 'react';

class CharacterCard extends React.Component {
  render() {
    const { charactersArr, id } = this.props;
    const characterCard = charactersArr[id];
    const isAlive = characterCard.alive;

    return (
      <React.Fragment>
        <div className="card">
          <h2>{characterCard.name}</h2>
          <img src={characterCard.image} alt={`Imagen de ${characterCard.name}`}></img>
          <ul className="card__details">
            <li>{characterCard.house}</li>
            <li>{characterCard.dateOfBirth}</li>
            <li>{characterCard.patronus}</li>
            {isAlive ? 
            <li>Estado: VIVO</li> 
            : 
            <li>Estado: MUERTO</li>
            }
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default CharacterCard;