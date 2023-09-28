console.log('Hello from Electron 👋')
const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Créez une fenêtre de navigateur Electron
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Active l'intégration de Node.js dans la fenêtre
    },
  });

  // Chargez un fichier HTML dans la fenêtre
  mainWindow.loadFile('index.html');
}

// Événement déclenché lorsque l'application est prête
app.whenReady().then(createWindow);
