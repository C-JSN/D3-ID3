import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

const path = require('path');
const fs = require('fs');

export default class TextEditor extends Component {
  constructor(props) {
    super();
    this.state = {
      url: path.resolve(__dirname, 'app/components/temp/temp.html' )
    }
  }

  componentDidMount() {
    const amdRequire = global.require('monaco-editor/min/vs/loader.js').require;

    function uriFromPath(_path) {
      let pathName = path.resolve(_path).replace(/\\/g, '/');
      if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
      }
      return encodeURI('file://' + pathName);
    }

    // uriFromPath needs to take in a path including the main folder
    // __dirname doesn't reach ID3-React
    amdRequire.config({
      baseUrl: uriFromPath(path.resolve(__dirname, 'node_modules/monaco-editor/min/'))
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
      editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
					'//code here'
				].join('\n'),
        language: 'javascript',
        theme: "vs-dark",
      });

      window.onresize = () => {
        editor.layout();
      }

      document.getElementById("editor").onkeyup = () => {
        fs.writeFile(path.resolve(__dirname, 'app/components/temp/temp.html'), editor.getValue(), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
        })
      }

      // document.getElementById("editor").onkeyup = () => {
      //   fs.writeFile(path.resolve(__dirname, 'app/components/temp/temp.html'), editor.getValue(), (err) => {
      //     if (err) throw err;
      //     // console.log('The file has been saved!');
      //   })
      //   // const webview = document.querySelector('webview')
      //   // webview.reload();
      // }

      document.getElementById("editor").addEventListener('keypress', function(event) {
        // console.log(event.ctrlKey);
        // console.log(event.which);
        if (event.ctrlKey && event.which === 19) {
          // console.log('webview reloaded!')
          const webview = document.querySelector('webview')
          webview.reload();
        }
      })
    });
  }

  render() {
    return (
      <div id="center-panel">
        <div id="editor">
        </div>
        <webview id="render-window" src={this.state.url}>
        </webview>
      </div>
    );
  }
}
