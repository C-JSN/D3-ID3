import React from 'react';

export default (props) => {
  return (
    <div className="toolbar-actions">
      <div className="btn-group">
        <button className="btn btn-default">
          <span className="icon icon-folder icon-text"></span>
          New
        </button>
        <button className="btn btn-default" id="import-btn">
          <input type="file" id="upload-file" hidden></input>
          <span className="icon icon-download icon-text"></span>
          Import
        </button>
        <button className="btn btn-default">
          <span className="icon icon-upload icon-text"></span>
          Export
        </button>
        <button className="btn btn-default btn-dropdown" id="templates">
          <span className="icon icon-layout icon-text"></span>
          Templates
        </button>
        <div id="template-menu" className="dropdown-menu">
          <a id="scatter-plot" href="#">Scatter Plot</a>
          <a href="#">Area Graph</a>
          <a href="#">Line Graph</a>
          <a href="#">Bar Chart</a>
        </div>
      </div>

      <div className="btn-group pull-right">
        <button className="btn btn-default">
          <span className="icon icon-database icon-text"></span>
          Data Management
        </button>
        <button className="btn btn-default">
          <span className="icon icon-popup icon-text"></span>
          Pop Editor
        </button>
        <button className="btn btn-default">
          <span className="icon icon-popup icon-text"></span>
          Pop Render
        </button>
      </div>
    </div>
  );
}
