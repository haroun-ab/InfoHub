
const { app, BrowserWindow, ipcRenderer } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1400,
    minHeight: 900,
    transparent: true,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false, 
      // webPreferences: {
      //   preload: path.join(__dirname, "preload.js"),
      // },
    },
    icon:'img/app-icon.png'
  });

  win.loadFile('index.html')
  win.webContents.openDevTools();

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

