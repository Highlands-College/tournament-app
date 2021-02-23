<template>
    <div class="view-participants">
        <div class="individuals" v-if="state.state.individuals != null">
            <div class="header">
                <p>Individuals</p>
            </div>
            <div
                v-for="(individual, i) in state.state.individuals"
                :key="i"
                class="list-item"
            >
                <p>{{ individual.name }}</p>
            </div>
        </div>
        <div class="teams" v-if="state.state.teams != null">
            <div class="header">
                <p>Teams</p>
            </div>
            <div
                v-for="(team, i) in state.state.teams"
                :key="i"
                class="list-item"
            >
                <p>
                    {{ team.name }} -
                    {{ team.players.toString().replace(/,/g, ', ') }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { participantsSymbol } from '@/store/participants'

export default defineComponent({
    name: 'ViewParticipants',
    setup() {
        return {
            state: inject(participantsSymbol)
        }
    }
})
</script>

<style lang="scss" scoped>
.view-participants {
    padding: 20px;
    display: flex;
    flex-direction: column;

    & .header {
        width: 100%;
        border-bottom: 1px solid black;
    }

    & .individuals,
    .teams {
        width: 100%;
        margin-top: 10px;
        background-color: #dddddd;
        padding: 10px;
        border-radius: 10px;

        & .list-item {
            width: 100%;
            margin-top: 10px;
            background-color: #cccccc;
            padding: 10px;
            border-radius: 10px;
        }
    }
}
</style>
