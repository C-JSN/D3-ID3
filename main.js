const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// file system module
const fs = require('fs');
const path = require('path');
const url = require('url');

const isDevelopment = (process.env.NODE_ENV === 'development');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// if (process.env.NODE_ENV === 'development') {
//     const electronHot = require('electron-hot-loader');
//     electronHot.install();
//     electronHot.watchJsx(['app/**/*.js']);
//     electronHot.watchCss(['app/assets/**/*.css']);
// }

// We can now require our jsx files, they will be compiled for us
// require('./app/index.js');

// In production you should not rely on the auto-transform.
// Pre-compile your react components with your build system instead.

// But, you can do this if your really want to:
// require('electron-hot-loader').install({doNotInstrument: true});


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  })
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  global.mainWindow = mainWindow;

  // Require mainmenu from mainmenu.js
  require('./menu/mainmenu');

  // Emitted when the window is closed
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    // fs.writeFile(path.resolve(__dirname, 'src/components/temp/temp.html'), 'Hello World', (err) => {
    //   if (err) throw err;
    //   // console.log('The file has been emptied!');
    // })
    mainWindow = null
  })
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
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
