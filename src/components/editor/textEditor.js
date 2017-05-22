import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
const d3parser = require('../../d3-parser/d3parser');

const path = require('path');
const fs = require('fs');
var editor;

class TextEditor extends Component {
  constructor(props) {
    super();
    this.state = {
      url: path.resolve(__dirname, 'src/components/temp/temp.html'),
    }
  }

  componentDidMount() {
    let amdRequire = global.require('monaco-editor/min/vs/loader.js').require;

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

    // workaround monaco-css not understanding the environment
    self.module = undefined;
    // workaround monaco-typescript not understanding the environment
    self.process.browser = true;

    amdRequire(['vs/editor/editor.main'], () => {
      editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
          '//code here'
        ].join('\n'),
        language: 'html',
        theme: "vs-dark",
        wrappingColumn: 0,
        scrollBeyondLastLine: false,
        wrappingIndent: "indent",
      });

      window.onresize = () => {
        editor.layout();
      }

      let editorView = document.getElementById('editor-container');
      let webview = document.getElementById('webview-container');
      ipcRenderer.on('updateMain', (event, arg) => {
        let newEditorString = fs.readFileSync(path.resolve(__dirname, 'src/components/temp/temp.html'), 'utf8');
        //console.log(newEditorString);
        editor.setValue(newEditorString);
        document.querySelector('webview').reload();
        let string = JSON.stringify(d3parser.parseD3(newEditorString), null, '\t');
        fs.writeFileSync('./src/d3ParserObj.js', string);
        ipcRenderer.send('updateAttr');
      });

      ipcRenderer.on('resize', (event, arg) => {
        editorView.style.height = 'calc(50% - 4px)';
        webview.style.height = 'calc(50% - 4px)';
      });

      ipcRenderer.on('openEditor', (event) => {
        editorView.style.height = 'calc(100% - 8px)';
      });

      ipcRenderer.on('openWebView', (event) => {
        webview.style.height = 'calc(100% - 8px)';
      });

      // import files into text-editor
      let importBtn = document.getElementById('import-btn');
      let fileUpLoadBtn = document.getElementById('upload-file');
      fileUpLoadBtn.setAttribute("accept", ".html,.csv,.tsv,.js,.txt");

      function openFile() {
        fileUpLoadBtn.click();
      }

      // d3 parse on upload
      fileUpLoadBtn.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        var currPath = document.getElementById('currPath');
        currPath.innerHTML = file.path;
        console.log(file.path)
        reader.onload = function (event) {
          fs.writeFileSync(path.resolve(__dirname, 'src/components/temp/temp.html'), event.target.result);
          let string = JSON.stringify(d3parser.parseD3(event.target.result), null, '\t');
          fs.writeFileSync('./src/d3ParserObj.js', string);
          editor.setValue(event.target.result);
          document.querySelector('webview').reload();
          ipcRenderer.send('fileUpload', event.target.result);
        };
        reader.readAsText(file);
      })

      importBtn.addEventListener('click', (event) => {
        openFile();
      });

      // export to html
      const exportBtn = document.getElementById('export-btn');
      exportBtn.addEventListener("click", (e) => {
        let d3string = fs.readFileSync('./src/d3ParserObj.js');
        let htmlString = d3parser.reCode(JSON.parse(d3string));
        const htmlFile = new Blob([htmlString], { type: 'text/html' });
        exportBtn.href = URL.createObjectURL(htmlFile);
        exportBtn.download = 'ID3_export.html';
      });

      // setInterval(function(){
      //   fs.writeFile(path.resolve(__dirname, 'src/components/temp/temp.html'), editor.getValue(), (err) => {
      //     if (err) throw err;
      //     // console.log('The file has been saved!');
      //   })
      // }, 300);
      //
      // setInterval(function(){
      //   const webview = document.querySelector('webview');
      //   webview.reload();
      // }, 300);


      // document.getElementById("editor").onkeyup = () => {

      //   fs.writeFile(path.resolve(__dirname, 'src/components/temp/temp.html'), startHtml + editor.getValue() + endHtml, (err) => {

      //   // fs.writeFile(path.resolve(__dirname, 'src/components/temp/temp.html'), editor.getValue(), (err) => {

      //     if (err) throw err;
      //     console.log('The file has been saved!');
      //   })
      // }

      window.addEventListener('keypress', function (event) {
        if (event.ctrlKey && event.which === 19) {
          let editorValue = editor.getValue();
          fs.writeFileSync(path.resolve(__dirname, 'src/components/temp/temp.html'), editorValue);
          let string = JSON.stringify(d3parser.parseD3(editorValue), null, '\t');
          fs.writeFileSync('./src/d3ParserObj.js', string);
          document.querySelector('webview').reload();
          ipcRenderer.send('updateAttr');
        }
      });

      let scatterPlot_button = document.querySelector('#scatter-plot');
      scatterPlot_button.addEventListener('click', function (e) {
        console.log('---ok you are calling a second method on click')
        var scatterPlot_code = fs.readFileSync(path.resolve(__dirname, 'src/templates/ScatterPlot.html'), 'utf8');
        editor.setValue(scatterPlot_code);
        fs.writeFile(path.resolve(__dirname, 'src/components/temp/temp.html'), editor.getValue(), (err) => {
          if (err) throw err;
        })
        document.querySelector('webview').reload();

      });

    });
  }

  render() {
    return (
      <div className="pane">
        <div id="webview-container" className="renderer-container">
          <header className="toolbar toolbar-header renderer-header">
            <span id="render-subheader">Renderer</span>
            <button id="popRender" className="btn btn-default pop-window-btn pull-right">
              <span className="icon icon-popup icon-text"></span>
            </button>
          </header>
          <div className="webview-container">
            <webview id="render-window" src={this.state.url}></webview>
          </div>
        </div>
        <div id="editor-container" className="editor-container">
          <header className="toolbar toolbar-header renderer-header">
            <span id="render-subheader">Editor</span>
            <button id="popEditor" className="btn btn-default pop-window-btn pull-right">
              <span className="icon icon-popup icon-text"></span>
            </button>
          </header>
          <div className="editor-subcontainer">
            <div id="editor"></div>
          </div>
        </div>
      </div>
    );
  }
}

export { TextEditor, editor }
