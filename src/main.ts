// @ts-nocheck

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const init = async () => {
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
}

init().then(() => console.log('Successfully initialized app'))

if (window.ipcRenderer !== null)
    console.log('App connected to Electron main process')
else console.log('Error while connecting to Electron')
