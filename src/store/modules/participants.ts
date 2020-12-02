import { Globals } from '@/globals.d.ts'

const participants = {
    store: (): Globals.Participants => ({
        teams: {
            1: {
                name: 'Tigers',
                players: [],
                score: 0
            }
        },
        individuals: {}
    }),
    mutations: {},
    actions: {},
    getters: {}
}

export { participants }
