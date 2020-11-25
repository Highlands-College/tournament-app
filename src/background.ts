'use strict'

import { app, protocol, ipcMain } from 'electron'
import { hooks } from '@/app/hooks'

const isDevelopment = process.env.NODE_ENV !== 'production'

protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])

app.on('window-all-closed', () => {
    hooks.windowAllClosed()
})

app.on('activate', async () => {
    await hooks.active()
})

app.on('ready', async () => {
    await hooks.ready()
})

ipcMain.handle('minimize-window', async () => {
    await hooks.minimize()
})

ipcMain.handle('maximize-window', async () => {
    await hooks.maximize()
})

ipcMain.handle('close-window', async () => {
    await hooks.close()
})

if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', data => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}
