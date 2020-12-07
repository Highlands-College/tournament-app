<template>
    <div class="add-participants">
        <div class="select-type">
            <select v-model="state.participantType">
                <option selected disabled value="">
                    Select participant type:</option
                >
                <option value="individual">Individual</option>
                <option value="team">Team</option>
            </select>
        </div>
        <div class="team-input">
            <div v-if="state.participantType === 'individual'">
                <input
                    type="text"
                    placeholder="Player name"
                    v-model.trim="state.individualPlayerName"
                />
                <button @click="addIndividuals(state.individualPlayerName)">
                    Submit individual
                </button>
            </div>
            <div v-if="state.participantType === 'team'">
                <input
                    type="text"
                    placeholder="Team name"
                    v-model="state.teamName"
                />
                <input
                    type="text"
                    placeholder="Player names separated by commas"
                    v-model="state.teamPlayers"
                />
                <button @click="submitTeam()">Submit team</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from 'vue'
import { participantsSymbol } from '@/store/participants'
import { Globals } from '@/globals'

export default defineComponent({
    name: 'AddParticipants',
    setup() {
        const state = reactive({
            participantType: '',
            individualPlayerName: '',
            teamName: '',
            teamPlayers: ''
        })

        const { addTeam, addIndividuals } = inject(
            participantsSymbol
        ) as Globals.useParticipants

        const submitTeam = () => {
            const name = state.teamName
            const players = state.teamPlayers.split(',')

            const filteredPlayers: string[] = []
            players.forEach(value => filteredPlayers.push(value.trim()))

            addTeam(name, filteredPlayers)
        }

        return {
            state,
            submitTeam,
            addIndividuals
        }
    }
})
</script>

<style lang="scss" scoped></style>
