const { app, BrowserWindow } = require('electron')
const path = require('path')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('dist/index.html')
    win.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})

/**
 * Execute php code  in the terminal
 * @param { string } code
 */
async function executePHPCode(code = '') {
    const query = `php -r "${code}"`
    try {
        const { stdout, stderr } = await exec(query)
        console.log(stdout)
    } catch (error) {
        console.error(error)
    }
}
