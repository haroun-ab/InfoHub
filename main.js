console.log("Hello from Electron 👋");
// main.js

// Modules pour la gestion de l'appli et la création de la BrowserWindow native browser window
const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const { app, BrowserWindow, ipcRenderer } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1400,
    minHeight: 900,
    transparent: true,
      nodeIntegration: true, 
      contextIsolation: false, 
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      }
  });
};
  // Ouvrir les outils de développement.
  mainWindow.webContents.openDevTools();

  win.loadFile('index.html')

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {

    // Sur macOS il est commun de re-créer une fenêtre  lors
    // du click sur l'icone du dock et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
