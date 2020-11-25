import { reactive, toRefs } from 'vue'
import { Globals } from '@/globals.d.ts'

// @ts-ignore
const useParticipants: Globals.useParticipants = () => {
    const state: Globals.Participants = reactive({
        teams: {},
        individuals: {}
    })

    const addTeam = (name: string, players: string[]) => {
        const team: Globals.Team = {
            name,
            players,
            score: 0
        }

        const index: string[] = Object.keys(state.teams)

        if (index.length >= 5) {
            alert('Too many teams')
        } else {
            console.log(`Added ${team.name} with these players:`)
            team.players.forEach(value => console.log(value))

            // @ts-ignore
            state.teams[index.length] = team
        }
    }

    const addIndividuals = (name: string) => {
        const individual: Globals.Individual = {
            name,
            score: 0
        }

        const index: string[] = Object.keys(state.individuals)

        if (index.length >= 20) {
            alert('Too many individuals')
        } else {
            console.log(`Added ${individual.name}`)

            // @ts-ignore
            state.individuals[index.length] = individual
        }
    }

    return {
        ...toRefs(state),
        addTeam,
        addIndividuals
    }
}

export { useParticipants }
