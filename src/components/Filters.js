import React from 'react';

class Filters extends React.Component {
  render() {

    const {filteredInfo, getInputValue} = this.props;

    return (
      <React.Fragment>
        <div className="input">
          <label htmlFor="input-info" className="container__label">Search by character</label>
          <input type="text" id="input-info" className="container__input" value={filteredInfo} onChange={getInputValue}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Filters;
 