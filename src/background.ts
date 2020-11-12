'use strict'

import { app, protocol } from 'electron'
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

export { app }
