import React from 'react';

class Filters extends React.Component {
  render() {

    const {filteredInfo, getInputValue} = this.props;

    return (
      <React.Fragment>
        <label htmlFor="input-info" className="container__laber"></label>
        <input type="text" id="input-info" className="container__input" value={filteredInfo} onChange={getInputValue}/>
      </React.Fragment>
    )
  }
}

export default Filters;
 