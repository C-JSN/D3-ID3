const {Menu} = require('electron');
const electron = require('electron');
const app = electron.app;

// Menu click functions


// Menu template
const template = [
    // {
    //   // wont show until package electron app
    //   label: 'ID3',
    //   submenu: [
    //     {role: 'close'},
    //     {role: 'quit'}
    //   ]
    // },
    {
      label: 'File',
      submenu: [
        {
          label: 'New Project',
          accelerator: 'CmdOrCtrl+P',
        },
        {
          type: 'separator'
        },
        {
          label: 'Import File...',
          accelerator: 'CmdOrCtrl+I',
          // click() { importFile() }
        },
        {
          label: 'Export File...',
          accelerator: 'CmdOrCtrl+E',
          // click() { exportFile() }
        },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          // click() { saveFile(); }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        {
          role: 'pasteandmatchstyle'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          role: 'reload'
        },
        {
          role: 'toggledevtools'
        },
        {
          type: 'separator'
        },
        {
          role: 'resetzoom'
        },
        {
          role: 'zoomin'
        },
        {
          role: 'zoomout'
        },
        {
          type: 'separator'
        },
        {
          role: 'togglefullscreen'
        }
      ]
    },
    {
      role: 'window',
      submenu: [
        {
          role: 'minimize'
        },
        {
          role: 'close'
        }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('http://d3-id3.com/') }
        }
      ]
    }
  ]
  // if (process.platform === 'darwin') {
  //   const name = app.getName()
  //   template.unshift({
  //     label: name,
  //     submenu: [
  //       {
  //         role: 'about'
  //       },
  //       {
  //         type: 'separator'
  //       },
  //       {
  //         role: 'services',
  //         submenu: []
  //       },
  //       {
  //         type: 'separator'
  //       },
  //       {
  //         role: 'hide'
  //       },
  //       {
  //         role: 'hideothers'
  //       },
  //       {
  //         role: 'unhide'
  //       },
  //       {
  //         type: 'separator'
  //       },
  //       {
  //         role: 'quit'
  //       }
  //     ]
  //   })
    // Edit menu.
    // template[1].submenu.push(
    //   {
    //     type: 'separator'
    //   },
    //   {
    //     label: 'Speech',
    //     submenu: [
    //       {
    //         role: 'startspeaking'
    //       },
    //       {
    //         role: 'stopspeaking'
    //       }
    //     ]
    //   }
    // )
    // Window menu.
    // template[3].submenu = [
    //   {
    //     label: 'Close',
    //     accelerator: 'CmdOrCtrl+W',
    //     role: 'close'
    //   },
    //   {
    //     label: 'Minimize',
    //     accelerator: 'CmdOrCtrl+M',
    //     role: 'minimize'
    //   },
    //   {
    //     label: 'Zoom',
    //     role: 'zoom'
    //   },
    //   {
    //     type: 'separator'
    //   },
    //   {
    //     label: 'Bring All to Front',
    //     role: 'front'
    //   }
    // ]
  // }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
