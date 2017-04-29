import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

export default class TextEditor extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    let amdRequire = global.require('monaco-editor/min/vs/loader.js').require;
    var path = require('path');

    function uriFromPath(_path) {
      var pathName = path.resolve(_path).replace(/\\/g, '/');
      if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
      }
      return encodeURI('file://' + pathName);
    }

    // uriFromPath needs to take in a path including the main folder
    // __dirname doesn't reach ID3-React
    amdRequire.config({
      baseUrl: uriFromPath(path.resolve(__dirname, '../ID3-React/node_modules/monaco-editor/min/'))
    });

    // console.log('amdRequire', uriFromPath(path.resolve(__dirname, '../ID3-React/node_modules/monaco-editor/min/')));
    // workaround monaco-css not understanding the environment
    self.module = undefined;
    // workaround monaco-typescript not understanding the environment
    self.process.browser = true;
    var editor;
    // console.log('editor', editor);
    // console.log('amdRequire', amdRequire.config.baseUrl);
    amdRequire(['vs/editor/editor.main'], () => {
      // console.log('inside amdRequire');
      editor = monaco.editor.create(document.getElementById('one'), {
        value: [
					'function x() {',
					'\tconsole.log("Hello world!");',
					'}'
				].join('\n'),
        language: 'javascript',
        theme: "vs-dark",
      });
    });
  }

  render() {
    return (
      <div className="item-views" style={{ display: (this.props.id == this.props.activeTab ? 'block' : 'none') }}>
        <div className="styleguide pane-item">
          <div
            className="editor-container"
            id="one"
            style={{ height: '600px', width: '400px' }}
          ></div>
        </div>
      </div>
    );
  }
}
