namespace Globals {
    type Team = {
        name: string
        players: string[]
        score: number
    }

    type Teams = {
        1?: Team
        2?: Team
        3?: Team
        4?: Team
        5?: Team
    }

    type Individual = {
        name: string
        score: number
    }

    type Individuals = {
        1?: Individual
        2?: Individual
        3?: Individual
        4?: Individual
        5?: Individual
        6?: Individual
        7?: Individual
        8?: Individual
        9?: Individual
        10?: Individual
        11?: Individual
        12?: Individual
        13?: Individual
        14?: Individual
        15?: Individual
        16?: Individual
        17?: Individual
        18?: Individual
        19?: Individual
        20?: Individual
    }

    type Participants = {
        teams: Teams
        individuals: Individuals
    }

    type useParticipants = () => {
        addTeam: (name: string, players: string[]) => void
        addIndividuals: (name: string) => void
    }
}

export { Globals }
