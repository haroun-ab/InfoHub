
const { app, BrowserWindow, ipcRenderer } = require('electron')
const NewsAPI = require('newsapi');

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 700,
    transparent: true,
    webPreferences: {
      nodeIntegration: true, // Cela permet d'utiliser require dans le fichier HTML
      contextIsolation: false, // Peut être nécessaire selon votre version d'Electron
    },
  });

  win.loadFile('index.html')
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




// const { ipcRenderer } = require('electron');

//       ipcRenderer.on('news-data', (event, data) => {
//         const mainElement = document.getElementById('news-data');
//         mainElement.innerHTML = JSON.stringify(data, null, 2);
//       });