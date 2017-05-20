const d3parser = require('./src/d3-parser/d3parser');

const { ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs');
var newEditorObj;

function uriFromPath(_path) {
  let pathName = path.resolve(_path).replace(/\\/g, '/');
  if (pathName.length > 0 && pathName.charAt(0) !== '/') {
    pathName = '/' + pathName;
  }
  return encodeURI('file://' + pathName);
}
amdRequire.config({
  baseUrl: uriFromPath(path.join(__dirname, 'node_modules/monaco-editor/min'))
});
// workaround monaco-css not understanding the environment
self.module = undefined;
// workaround monaco-typescript not understanding the environment
self.process.browser = true;

let editorString = fs.readFileSync('./src/components/temp/temp.html', 'utf8');

amdRequire(['vs/editor/editor.main'], function () {
  newEditorObj = monaco.editor.create(document.getElementById('editor'), {
    value: editorString,
    language: 'javascript',
    theme: "vs-dark",
  });

  window.onresize = () => {
    newEditorObj.layout();
  }
});

window.addEventListener('keypress', function (event) {
  console.log('keypress');
  if (event.ctrlKey && event.which === 19) {
    console.log('ctrl s');
    let editorValue = newEditorObj.getValue();
    fs.writeFileSync(path.resolve(__dirname, 'src/components/temp/temp.html'), editorValue);
    let string = JSON.stringify(d3parser.parseD3(editorValue), null, '\t');
    fs.writeFileSync('./src/d3ParserObj.js', string);
    ipcRenderer.send('updateMain');
  }
})

ipcRenderer.on('editorMsg', (event, arg) => {
  // console.log(arg);
  newEditorObj.setValue(arg);
});

ipcRenderer.on('editorClose', (event) => {
  fs.writeFileSync(path.resolve(__dirname, 'src/components/temp/temp.html'), newEditorObj.getValue());
});

//module.exports = newEditorObj;