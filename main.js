const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// ipcMain module
const ipcMain = electron.ipcMain;

// file system module
const fs = require('fs');
const path = require('path');
const url = require('url');

// set up local express server for python data processing
var server = require('./server/express');

const isDevelopment = (process.env.NODE_ENV === 'development');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    titleBarStyle: 'hidden',
    frame: false,
    show: false,
  })

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  global.mainWindow = mainWindow;

  // Require mainmenu from mainmenu.js
  require('./menu/mainmenu');

  // set window to show once renderer process has rendered the page
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // Emitted when the window is closed
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // create initial main window
  createWindow();

  // let editorView = document.getElementById('editor');
  // let webview = document.getElementById('render-window');

  // pop out editor
  ipcMain.on('popEditor', (event, arg) => {
    if (!global.newEditor) {
      let newEditor = new BrowserWindow({ width: 800, height: 600 });
      newEditor.loadURL(url.format({
        pathname: path.join(__dirname, 'editor.html'),
        protocol: 'file:',
        slashes: true
      }))
      global.newEditor = newEditor;
      newEditor.on('closed', () => {
        // let editorView = document.getElementById('editor');
        // let webview = document.getElementById('render-window');
        // editorView.style.height = '50%';
        // webview.style.height = '50%';
        // ipcMain.send('resetView');
        global.newEditor = null;
      });
    }
  });

  ipcMain.on('openDataWin', (event, arg) => {
    if (!global.dataWin) {
      let dataWin = new BrowserWindow({ width: 800, height: 600 });
      dataWin.loadURL('file://' + path.join(__dirname, 'src/dataWindow/app/index.html'))
      dataWin.on('closed', () => {
        global.dataWin = null;
      })
    }
  });

  // pop out live render window
  ipcMain.on('popRender', (event, arg) => {
    if (!global.newWebView) {
      let newWebView = new BrowserWindow({ width: 800, height: 600 });
      newWebView.loadURL('file://' + path.resolve(__dirname, 'src/components/temp/temp.html'))
      newWebView.on('closed', function () {
        console.log('closed')
        ipcMain.on('closing', (event, arg) => {
          console.log(arg)  // prints "ping"
          event.sender.send('resetView', 'pong')
        })
        global.newWebView = null;
      })
    }
  });
});


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit(()=> {
      var file = fs.readFileSync('./src/components/temp/onload.html');
      fs.writeFileSync('./src/components/temp/temp.html', file);
    })
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
