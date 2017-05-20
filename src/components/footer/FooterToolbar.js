import React from 'react';

export default (props) => {
  return(
    <div className="toolbar-actions">
      <div style={{backgroundColor: '#333', width: "80%", height: "80%", display: 'inline'}}>
        information
      </div>
      <button className="btn btn-primary pull-right">
        Save
      </button>
    </div>
  );
}
