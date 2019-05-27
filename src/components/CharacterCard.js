import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {

  constructor(props) {
    super(props);
    
    this.getColor = this.getColor.bind(this);
  }

  componentWillUnmount() {
    this.props.resetFilters();
  }

  getColor(house) {
    if (house === 'Gryffindor') {
      return 'gryffindor'
    } else if (house === 'Slytherin') {
      return 'slytherin'
    } else if (house === 'Hufflepuff') {
      return 'hufflepuff'
    } else if (house === 'Ravenclaw') {
      return 'ravenclaw'
    } else {
      return 'noHouse'
    }
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
              <div className={`card__details ${this.getColor(characterCard.house)}`}>
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
        <Link to="/"><i className="fas fa-arrow-circle-left"></i></Link>
      </React.Fragment>
    )

  }
}

export default CharacterCard;