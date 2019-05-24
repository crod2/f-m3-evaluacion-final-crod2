import React from 'react';

class CharacterCard extends React.Component {
  render() {
    const { charactersArr, id } = this.props;
    const characterCard = charactersArr[id];

    return (
      <React.Fragment>
        <h2>{characterCard.name}</h2>
        <img src={characterCard.image} alt={`Imagen de ${characterCard.name}`}></img>
        <h3>{characterCard.house}</h3>
      </React.Fragment>
    )
  }
}

export default CharacterCard;