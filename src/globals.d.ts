namespace Globals {
    type Team = {
        name: string
        players: string[]
        score: number
    }

    type Teams = Team[]

    type Individual = {
        name: string
        score: number
    }

    type Individuals = Individual[]

    type Participants = {
        teams: Teams
        individuals: Individuals
    }

    type useParticipants = {
        addTeam: (name: string, players: string[]) => void
        addIndividuals: (name: string) => void
    }

    type createParticipants = () => {
        addTeam: (name: string, players: string[]) => void
        addIndividuals: (name: string) => void
    }
}

export { Globals }
