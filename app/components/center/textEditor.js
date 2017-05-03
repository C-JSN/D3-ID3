import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

export default class TextEditor extends Component {
  constructor(props) {
    super();
    this.state = {
      url: '/Users/eveafeline/Documents/Codesmith/senior/ID3-React/app/components/temp/temp.html',
    }
  }

  componentDidMount() {
    let amdRequire = global.require('monaco-editor/min/vs/loader.js').require;
    var path = require('path');
    const fs = require('fs');

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
      editor = monaco.editor.create(document.getElementById('one'), {
        value: [
					'//code here'
				].join('\n'),
        language: 'javascript',
        theme: "vs-dark",
      });

      window.onresize = () => {
        editor.layout();
      }

      document.getElementById("one").onkeyup = () => {
        fs.writeFile(path.resolve(__dirname, '../ID3-React/app/components/temp/temp.html'), editor.getValue(), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
        })
      }

      document.getElementById("one").onkeyup = () => {
        fs.writeFile(path.resolve(__dirname, '../ID3-React/app/components/temp/temp.html'), editor.getValue(), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
        })
        // const webview = document.querySelector('webview')
        // webview.reload();
      }

      document.getElementById("one").addEventListener('keypress', function(event) {
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
      <div>
        <div
          id="one"
          style={{ height: '45vh' }}
        >
        </div>
        <webview src={this.state.url} style={{height: '50vh'}}>
        </webview>
      </div>
    );
  }
}
