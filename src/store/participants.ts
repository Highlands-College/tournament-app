import { reactive, provide, readonly } from 'vue'
import { Globals } from '@/globals.d.ts'

const participantsSymbol = Symbol('participants')

// @ts-ignore
const createParticipants: Globals.createParticipants = () => {
    const state: Globals.Participants | any = reactive({
        teams: [],
        individuals: []
    })

    const addTeam = (name: string, players: string[]) => {
        const team: Globals.Team = {
            name,
            players,
            score: 0
        }

        if (state.teams.length >= 5) {
            alert('Too many teams')
        } else {
            console.log(`Added ${team.name} with these players:`)
            team.players.forEach(value => console.log(value))

            state.teams.push(team)
        }
    }

    const addIndividuals = (name: string) => {
        if (state.individuals.length >= 20) {
            return alert('Too many individuals')
        } else if (name.length === 0) {
            return alert('No name added')
        }
        // else if () {
        //     return alert('Name already taken')
        // }

        console.log(state.individuals.filter((n: string) => n !== name))
        console.log(state.individuals.filter((n: string) => n))

        const individual: Globals.Individual = {
            name,
            score: 0
        }

        console.log(`Added ${individual.name}`)
        state.individuals.push(individual)
    }

    return {
        state: readonly(state),
        addTeam,
        addIndividuals
    }
}

const provideParticipants = () =>
    provide(participantsSymbol, createParticipants())

export { participantsSymbol, createParticipants, provideParticipants }
