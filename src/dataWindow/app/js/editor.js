const amdRequire = global.require('monaco-editor/min/vs/loader.js').require;
const {dialog} = require('electron').remote;
var fs = require('fs');
const {ipcRenderer} = require('electron');

const path = require('path');
function uriFromPath(_path) {
  let pathName = path.resolve(_path).replace(/\\/g, '/');
  if (pathName.length > 0 && pathName.charAt(0) !== '/') {
    pathName = '/' + pathName;
  }
  return encodeURI('file://' + pathName);
}

amdRequire.config({
  baseUrl: uriFromPath(path.join(__dirname, '../node_modules/monaco-editor/min'))
});
// workaround monaco-css not understanding the environment
self.module = undefined;
// workaround monaco-typescript not understanding the environment
self.process.browser = true;

var file = fs.readFileSync(path.join(__dirname, './py/onload.py'));

amdRequire(['vs/editor/editor.main'], function () {
  let editor = monaco.editor.create(document.getElementById('editor'), {
    value: file.toString(),
    language: 'python',
    theme: 'vs-dark',
    wrappingColumn: 0,
  });

  window.onresize = () => {
    editor.layout();
  }

  window.addEventListener('keypress', function(event) {
    if (event.ctrlKey && event.which === 19) {
      var toAppend = [];
        fs.writeFileSync(path.join(__dirname, './py/processing.py'), editor.getValue())
        fetch("http://localhost:6431/pyPrint").then(function(response) {
          return response.json();
        }).then(function(data) {
          if (data !== undefined) {
            var len = document.getElementsByTagName('li').length;
            var ul = document.getElementById("pyPrint");

            var newData = JSON.parse(data);
            for(let i = 0; i < newData.length; i += 1) {
              var data2 = '[' + len + ']: ' + newData[i];
              len += 1;
              var li = document.createElement("li");
              li.appendChild(document.createTextNode(data2));
              ul.appendChild(li);
            }
          }
        }).catch(function() {
          // console.log("Booo");
        });
    }
  })

  editor.domElement.getElementsByClassName('monaco-scrollable-element')[0].style.width = '98%';
});
