const { ipcRenderer } = require('electron');
const path = require('path');
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
amdRequire(['vs/editor/editor.main'], function () {
  newEditorObj = monaco.editor.create(document.getElementById('editor'), {
    value: [
      'function x() {',
      '\tconsole.log("Hello world!");',
      '}'
    ].join('\n'),
    language: 'javascript',
    theme: "vs-dark",
  });

  window.onresize = () => {
    newEditorObj.layout();
  }
});

//module.exports = newEditorObj;