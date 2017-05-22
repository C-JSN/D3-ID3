import React from 'react';

export default (props) => {
  return(
    <div className="footer-status toolbar-actions">
      <div className="status-bar-left">
        <div className="error-helper-status">
          <span className="error-helper icon icon-info-circled"></span>
          <span className="error-helper info-circle">0</span>
          <span className="error-helper icon icon-attention"></span>
          <span className="error-helper attention-alert">0</span>
          <span className="error-helper icon icon-info-circled"></span>
          <span className="error-helper info-circle">0</span>
        </div>
        <div className="editor-line-info">
          <span className="line-char-count">8:71</span>
        </div>
        <div className="file-info">
          <span className="current-path">file name: </span>
          <a className="current-path" id="currPath"></a>
        </div>
      </div>
      <div className="status-bar-right">
        <div className="window-status">
          <span className="icon icon-popup"></span>
          <span className="current-window">Render Window</span>
        </div>
        <div className="data-info">
          <span className="icon icon-database"></span>
          <a className="data-progress">Data Loaded</a>
        </div>
      </div>
    </div>
  );
}
