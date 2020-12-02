import { createStore } from 'vuex'
import { participants } from './modules/participants'

const store = createStore({
    modules: {
        participants
    }
})

export { store }
