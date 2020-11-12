import { BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

const integration = process.env.ELECTRON_NODE_INTEGRATION
const devServer = process.env.WEBPACK_DEV_SERVER_URL

const createWindow = async () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate([]))

    const win = new BrowserWindow({
        title: 'Tournament App',
        width: 1200,
        height: 700,
        webPreferences: {
            nodeIntegration: (integration as unknown) as boolean,
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
