import React from 'react';

export default (props) => {

  const margin = Object.keys(props.margin).map((attr, i) => {
    return <div className="form-group" key={i}>
              <label>{attr}</label>
              <input key={i} type="text" className="form-control margin-input" placeholder={attr}></input>
            </div>
  });

  return(
    <div className="dimensions">
      <h5 className="panel-headers">Margin</h5>
      <form>{margin}</form>
    </div>
  );
}
