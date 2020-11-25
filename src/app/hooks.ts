// @ts-ignore
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { app, BrowserWindow, remote } from 'electron'
import { createWindow } from '@/app/window'

let win: BrowserWindow | null
const isDevelopment = process.env.NODE_ENV !== 'production'
const getWindow = () =>
    (setImmediate(() =>
        remote.BrowserWindow.getFocusedWindow()
    ) as unknown) as BrowserWindow

const windowAllClosed = () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}

const active = async () => {
    if (win === null) {
        await createWindow()
    }
}

const ready = async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        try {
            await installExtension(VUEJS_DEVTOOLS)
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }
    await createWindow()
}

const minimize = async () => {
    getWindow().minimize()
}

const maximize = async () => {
    const window = getWindow()
    window.isMaximized() ? window.unmaximize() : window.maximize()
}

const close = async () => {
    app.exit(0)
}

const hooks = {
    windowAllClosed,
    active,
    ready,
    minimize,
    maximize,
    close
}

export { hooks }
