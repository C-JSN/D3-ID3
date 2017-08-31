import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from '../containers/Header';
import TextEditor, { editor } from './editor/textEditor';
import AttributesPanel from '../containers/AttributesPanel';
import Footer from './footer/Footer';

const { ipcRenderer } = require('electron');

export default class App extends Component {

  componentDidMount() {
    let editorView = document.getElementById('editor-container');
    let webview = document.getElementById('webview-container');
    let openDataWin = document.getElementById('dataWin');
    let popRender = document.getElementById('popRender');
    let popEditor = document.getElementById('popEditor');
    let resizeView = document.getElementById('resizeView');

    let editorH = editorView.style.height;
    let webviewH = webview.style.height;

    openDataWin.addEventListener('click', (event) => {
      ipcRenderer.send('openDataWin');
    });

    popEditor.addEventListener('click', (event) => {
      webview.style.height = 'calc(100% - 8px)';
      editorView.style.height = '39px';
      ipcRenderer.send('popEditor', editor.getValue());
    });

    popRender.addEventListener('click', (event) => {
      editorView.style.height = 'calc(100% - 8px)';
      webview.style.height = '39px';
      ipcRenderer.send('popRender');
    });
  }

  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          <div className="pane-group">
            <TextEditor toUserCode={this.props.toUserCode}/>
            <AttributesPanel />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
}
// Possilbe resize window pane solution

// componentDidMount() {
//   let isLeftResizing = false;
//   let isRightResizing = false;
//   let leftSizer = document.getElementById('left-sizer');
//   let rightSizer = document.getElementById('right-sizer');
//   let container = document.getElementById('panel-container');
//   let left = document.getElementById('left-panel');
//   let right = document.getElementById('right-panel');
//
//   leftSizer.addEventListener('mousedown', (e) => {
//     isLeftResizing = true;
//   });
//
//   rightSizer.addEventListener('mousedown', (e) => {
//     isRightResizing = true;
//   });
//
//   document.addEventListener('mousemove', (e) => {
//     if (isLeftResizing) {
//       let leftWidth = e.clientX - container.offsetLeft;
//       left.style.width = `${leftWidth}px`;
//     }
//
//     if (isRightResizing) {
//       let rightWidth = e.clientX - container.offsetLeft;
//       right.style.width = `${rightWidth}px`;
//     }
//   });
//
//   document.addEventListener('mouseup', () => {
//     isLeftResizing = false;
//     isRightResizing = false;
//   });
// }
