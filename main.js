const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, '/assets/php.png')
    })

    win.loadFile('dist/index.html')
    // win.openDevTools()
    win.removeMenu()
}

app.whenReady().then(() => {
    createWindow()
})
