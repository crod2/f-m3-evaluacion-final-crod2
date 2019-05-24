import React from 'react';

class Filters extends React.Component {
  render() {

    const {filteredInfo, getInputValue, charactersArr} = this.props;

    return (
      <React.Fragment>
        <label htmlFor="input-info" className="container__laber"></label>
        <input type="text" id="input-info" className="container__input" value={filteredInfo} onChange={getInputValue}/>
        <ul className="container__list">
          {charactersArr
          .filter(item => item.name.toLowerCase().includes(filteredInfo))
          .map(item => 
          <li className="list__characters" key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={`Imagen de ${item.name}`}></img>
          <h3>{item.house}</h3>
          </li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

export default Filters;
 