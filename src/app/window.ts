import { BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import path from 'path'

const integration = process.env.ELECTRON_NODE_INTEGRATION
const devServer = process.env.WEBPACK_DEV_SERVER_URL

const createWindow = async () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate([]))

    const win = new BrowserWindow({
        title: 'Tournament App',
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true
        },
        center: true,
        frame: false,
        titleBarStyle: 'hidden'
    })

    if (devServer) {
        win.webContents.openDevTools()
        await win.loadURL(devServer as string)
    } else {
        createProtocol('app')
        await win.loadURL('app://./index.html')
    }
}

export { createWindow }
