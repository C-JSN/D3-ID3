import React from 'react';

const AttrListItem = ({info, updateValue}) => {
  return (
      <div>
        <div className="attr-container">
          <div className="parsed-header">
            <h5 className="panel-headers parsed-method-obj">{info.methodObject}</h5>
            <h5 className="panel-headers parsed-method-name">{info.d3MethodName}</h5>
          </div>
          <div className="parser-input">
            <label>
              {'(' + info.name}
              <input className="form-control parsed-input" type={info.type} value={info.value} onChange={(e) => updateValue(info.id, e.target.value)} />
              {')'}
            </label>
          </div>
          <hr className="parser-hr" />
        </div>
      </div>
  );
};

export default AttrListItem;
